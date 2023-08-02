import React from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

const Menu = (props) => {
  return (
    <UikitMenu
      links={config}
      {...props}
    />
  )
}

export default Menu
