import '../styles/globals.css'
import React from 'react'
import App from 'next/app'
import Main from '../components/layouts/main'
import Content from '../components/layouts/content'
import { CounterProvider } from './Counter'
import { Provider } from '../context/context'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Provider>
      <CounterProvider>
        <Main>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Main>
      </CounterProvider>
      </Provider>
    )
  }
}
export default MyApp