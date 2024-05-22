import React from 'react'
import Headers from './component/Header'
import Latest from './component/Latest'
import Providers from './Providers'


const layout = ({children}) => {
  return (
    <html>
      <body>
      <Providers>
       <Headers/>
        <Latest/>
        {children}
        </Providers>
      </body>
    </html>
  )
}

export default layout