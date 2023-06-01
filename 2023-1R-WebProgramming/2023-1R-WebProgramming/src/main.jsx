import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
import './index.css'
import Worldcup from './Worldcup.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RecoilRoot>
      <Worldcup/>
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>,
)