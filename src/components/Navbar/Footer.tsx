import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background: #150134;
  padding: 15px 60px 30px 60px;
  align-items: center;
`

const StyledVertical = styled.div`
  display: grid;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 10px;
`

const StyledHorizental = styled.button`
  display: flex;
  align-items: center;
  margin: 4px 60px 4px 60px;
  @media (max-width: 768px) {
    margin: 4px 20px 4px 20px;
  }
  justify-content: space-between;
  font-size: 18px;
  background: none;
  color: #ffffff;
  border: none;
  text-align: left;
  &:hover {
    color: #ffffffaa;
  }
  &:active {
    color: #ffffff55;
  }
`

const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledHorizentalBold = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 60px 12px 60px;
  justify-content: space-between;
  font-size: 19px;
  font-weight: bold;
  color: #ffffff;
`

const StyledLogo = styled.img`
  height: 100px;
  margin-right: 50px;
`

const StyledText = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  color: #ffffff;
`

const StyledImage = styled.img`
  height: 18px;
  margin-right: 15px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledVertical >
          <StyledLogo src="images/Logo_Metacoms_10.svg" alt="logo" />
        </StyledVertical>
        <StyledVertical>
          <StyledHorizentalBold>Company</StyledHorizentalBold>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://metacoms.io/terms-of-service/");
          }}>Terms of Service</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://metacoms.io/acceptable-use-policy/");
          }}>Acceptable Use Policy</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://metacoms.io/cookies-policy/");
          }}>Cookie Policy</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://team.metacoms.io/");
          }}>Team</StyledHorizental>
        </StyledVertical>

        <StyledVertical>
          <StyledHorizentalBold>Information</StyledHorizentalBold>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://metacoms.io/media/metacoms-whitepaper.pdf");
          }}>Whitepaper</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://metacoms.io/media/one-pager.pdf");
          }}>One Pager</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/Metacoms/MEAC_Token");
          }}>Github</StyledHorizental>

          <StyledHorizental onClick={(e) => {
            e.preventDefault();
            window.open("mailto:support@metacoms.io");
          }}>Mail support</StyledHorizental>
        </StyledVertical>
        <StyledVertical>
          <StyledHorizentalBold>Community</StyledHorizentalBold>

          <StyledHorizental>
            <StyledImage src="images/social/Twitter.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://twitter.com/MetaComs")
            }} />

            <StyledImage src="images/social/LinkedIn.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/company/metacoms3d/");
            }}/>

            <StyledImage src="images/social/Facebook.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://www.facebook.com/metacoms.io");
            }}/>

            <StyledImage src="images/social/YouTube-01.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://www.youtube.com/c/MetaComs");
            }}/>

            <StyledImage src="images/social/Telegram.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://t.me/metacoms");
            }}/>

            <StyledImage src="images/social/Reddit-01.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://www.instagram.com/metacoms1/");
            }}/>

            <StyledImage src="images/social/Discord-01.svg" onClick={(e) => {
              e.preventDefault();
              window.open("https://discord.gg/Q6wwJ59efF");
            }}/>
          </StyledHorizental>
        </StyledVertical>
      </StyledFooterContainer>
      <StyledText>Metacoms 2023 The Netherlands - All Rights Reserved</StyledText>
    </StyledFooter>
  )
}

export default Footer