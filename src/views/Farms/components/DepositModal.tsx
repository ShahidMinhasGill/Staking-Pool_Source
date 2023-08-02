import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'
import SlippageToleranceSettings from 'components/SlippageToleranceSettings'
import styled from 'styled-components'
import {
  Button
} from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#7b3fe4',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
});


interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string, days: string) => void
  onDismiss?: () => void
  tokenName?: string
  depositFeeBP?: number
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '', depositFeeBP = 0 }) => {
  const [val, setVal] = useState('')
  const [days, setDays] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  console.log('DepositModal!!!!!!!!!!!!!')
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const displayFullBalance = parseInt(fullBalance, 10);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleDays = useCallback(
    (indays: string) => {
      setDays(indays)
    },
    [setDays],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <ThemeProvider theme={theme}>
      <Modal title={`${TranslateString(316, 'Deposit')} ${tokenName} Tokens`} onDismiss={onDismiss}>
        <TokenInput
          value={val}
          onSelectMax={handleSelectMax}
          onChange={handleChange}
          max={displayFullBalance}
          symbol={tokenName}
          depositFeeBP={depositFeeBP}
        />
        <SlippageToleranceSettings onSetDays={handleDays} />
        <ModalActions>
            <Button variant="outlined" color="primary" onClick={onDismiss}>
              {TranslateString(462, 'Cancel')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={pendingTx}
              onClick={async () => {
                if (val !== '' && days !== '') {
                  setPendingTx(true)
                  await onConfirm(val, days)
                  setPendingTx(false)
                  onDismiss()
                }
              }}
            >
              {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
            </Button>
        </ModalActions>
      </Modal>
    </ThemeProvider>
  )
}

export default DepositModal
