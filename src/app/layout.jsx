import React from 'react'
import Headers from './component/Header'
import Providers from './Providers'
import Footer from './component/footer'


const layout = ({children}) => {
  return (
    <html>
      <body>
      <Providers>
       <Headers/>
        {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  )
}

export default layout