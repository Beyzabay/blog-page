import React from 'react'
import Headers from './component/Header'
import Providers from './Providers'


const layout = ({children}) => {
  return (
    <html>
      <body>
      <Providers>
       <Headers/>
        {children}
        </Providers>
      </body>
    </html>
  )
}

export default layout