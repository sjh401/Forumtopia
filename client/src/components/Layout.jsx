
import React from 'react'
import Footer from './Footer'
import MainNavBar from './nav/MainNavbar'


export default function Layout(props) {
  return (
    <>
      <MainNavBar />
        <div>
          {props.children}
        </div>
      <Footer />
    </>
  )
}