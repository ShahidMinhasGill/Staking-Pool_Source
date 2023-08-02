import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background: #140035;
  padding: 30px 50px 20px 30px;
  justify-content: space-between;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
`

const StyledButton = styled.button`
  width: 160px;
  height: 35px;
  background: #201140;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 10px;
  border: 3px solid #a22ac6;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-flex;

  &:hover {
    background: #7b3fe4;
  }
  &:active {
    background: #6a1db4;
  }
`

const StyledButtonSignIn = styled.button`
  width: 160px;
  height: 35px;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-image: linear-gradient(#7B3FE4, #A229C5);
  &:hover {
    background: #7b3fe4;
  }
  &:active {
    background: #6a1db4;
  }
`

const StyledIconMeta = styled.img`
  height: 1rem;
  margin: auto;
`

const StyledText = styled.div`
  text-align: center;
  margin: auto;
`

const StyledLogo = styled.img`
  height: 35px;
`

declare global {
  interface Window { ethereum: any; }
}

const Header = () => {

  const addPolygon = async() => {
    const chainId = 137;
    const chainIdHex = `0x${  chainId.toString(16)}`;
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }],
    });
  }

  const addMEAC = async() => {
    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0x86557C01B77C0e65c8aB87fbA6D221E94EdC81e4",
          symbol: "MEAC",
          decimals: "18",
          image: "",
        },
      },
    });
  }

  return (
    <StyledHeader>
      <StyledLogo src="images/Logo.svg" alt="logo" onClick={(e) => {
        e.preventDefault();
        window.open('https://metacoms.io')
      }}/>
      <StyledButton onClick={(e) => {
        e.preventDefault();
        window.open('https://acc.metacoms.io/metacom-ntf-marketplace')}}>
        <StyledText>NFTs</StyledText>
      </StyledButton>
      <StyledButton onClick={() => addPolygon()}>
        <StyledIconMeta src="images/MetaMask_Fox.svg" alt="MetaMask" />
        <StyledText>
          Add Polygon
        </StyledText>
      </StyledButton>
      <StyledButton onClick={() => addMEAC()}>
        <StyledIconMeta src="images/MetaMask_Fox.svg" alt="MetaMask" />
        <StyledText>
          Add MEAC
        </StyledText>
      </StyledButton>
      <StyledButton onClick={(e) => {
        e.preventDefault();
        window.open('http://meac.metacoms.io')}}>
        <StyledText>Buy MEAC</StyledText>        
      </StyledButton>
      <StyledButtonSignIn onClick={(e) => {
        e.preventDefault();
        window.open('https://acc.metacoms.io/connect')}}>
        Sign-In
      </StyledButtonSignIn>
    </StyledHeader>
  )
}

export default Header