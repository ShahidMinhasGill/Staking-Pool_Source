import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/Footer'
import PageLoader from './components/PageLoader'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/">
            <Farms tokenMode />
          </Route>
          <Route path="/staking">
            <Farms tokenMode />
          </Route>
          <Route path="/launch-pools">
            <Pools />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default React.memo(App)
