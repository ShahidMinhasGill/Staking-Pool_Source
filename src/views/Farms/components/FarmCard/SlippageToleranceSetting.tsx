import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, Text } from '@pancakeswap-libs/uikit'
// import { useUserSlippageTolerance } from 'state/user/hooks'
// import QuestionHelper from '../QuestionHelper'
// import TranslatedText from '../TranslatedText'

const MAX_SLIPPAGE = 5000
const RISKY_SLIPPAGE_LOW = 50
const RISKY_SLIPPAGE_HIGH = 500

const StyledSlippageToleranceSettings = styled.div`
  margin-bottom: 16px;
  width: 290px;
  opacity: 0.5;
  font: Swis721 BT;
`

const Option = styled.div`
  padding: 0 4px;
  width: 65px;
`

const InputOption = styled.div`
  padding: 0 4px;
  width: 80px;
`

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${Option}:first-child {
    padding-left: 0;
  }

  ${Option}:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const StyledToggleButton = styled(Button)`
  width: 100%;
`

const predefinedValues = [
  { label: '0.1%', value: 0.1 },
  { label: '0.5%', value: 0.5 },
  { label: '1%', value: 1 },
]

export default function SlippageToleranceSettings() {
  // const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [value, setValue] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseFloat(inputValue))
  }

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 100
      if (!Number.isNaN(rawValue) && rawValue > 0 && rawValue < MAX_SLIPPAGE) {
        // setUserslippageTolerance(rawValue)
        setError(null)
      } else {
        setError('Enter a valid slippage percentage')
      }
    } catch {
      setError('Enter a valid slippage percentage')
    }
  }, [value, setError])

  // Notify user if slippage is risky
  // useEffect(() => {
  //   if (userSlippageTolerance < RISKY_SLIPPAGE_LOW) {
  //     setError('Your transaction may fail')
  //   } else if (userSlippageTolerance > RISKY_SLIPPAGE_HIGH) {
  //     setError('Your transaction may be frontrun')
  //   }
  // }, [userSlippageTolerance, setError])

  return (
    <StyledSlippageToleranceSettings>
      <Options>
        <Flex mb={['8px', 0]} mr={[0, '8px']}>
          {predefinedValues.map(({ label, value: predefinedValue }) => {
            const handleClick = () => setValue(predefinedValue)

            return (
              <Option key={predefinedValue}>
                <StyledToggleButton variant={value === predefinedValue ? 'primary' : 'tertiary'} onClick={handleClick}>
                  {label}
                </StyledToggleButton>
              </Option>
            )
          })}
        </Flex>
        <Flex alignItems="center">
          <InputOption>
            <Input
              type="number"
              scale="lg"
              step={0.1}
              min={0.1}
              placeholder="5%"
              value={value}
              onChange={handleChange}
              isWarning={error !== null}
            />
          </InputOption>
          <Option>
            <Text fontSize="18px">%</Text>
          </Option>
        </Flex>
      </Options>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </StyledSlippageToleranceSettings>
  )
}

// export default SlippageToleranceSettings
