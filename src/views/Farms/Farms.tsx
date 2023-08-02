import React, { useEffect, useCallback, useState } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Button, Image, Heading, Text } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, useFarmFromPid } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Divider from './components/Divider'
import MaintenanceModal from './MaintenaceModel'
const Footer = styled.div`
  background-image: url(/images/footerbg.svg);
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-bottom: 32%;
  background-size: cover;
`

const TopBar = styled.div`
  display: flex;
`

const FarmingButton = styled.a`
  margin-left: 20px;
  background-color: #4ba0e7;
  color: #ffffff;
  padding: 5px 25px;
  font: normal normal 500 24px/24px Swis721 BT;
  font-size: 25px;
`

export const Description = styled(Text)`
  font: normal normal 1000 28px/30px Swis721 BT;
  display: flex;
`

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const history = useHistory()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')

  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        const cakeRewardPerBlock = new BigNumber(farm.localPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const apy = new BigNumber('1')
        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <div>
      <MaintenanceModal/>
      <Page>
        <TopBar>
          <Description>{TranslateString(999, 'MEAC Staking Pool')}</Description>
        </TopBar>
        <Divider/>
        <FlexLayout>
          {farmsList(activeFarms, false)}
        </FlexLayout>
      </Page>
    </div>
  )
}

export default Farms