import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import About from './About.jsx'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import Worldcup from './Worldcup.jsx'

const router = createBrowserRouter(
  [{ 
    path: "/",
    element: <Root/>,
    errorElement: <div>아이고 에러가 났어요</div>,
    children:[{ // element page를 먼저 나타내고 그 밑에서 children page를 구현함. 그래서 header도 에러 뜬 듯
      path: "login",
      element: <div>로그인 페이지</div>,
    },{
      path: "worldcup",
      element: <RecoilRoot><Worldcup/></RecoilRoot>
    },{
      path:"about",
      element: <About/>
    },{
      path: "user/:id", // id를 입력받을 수 있음
      element: <div>유저 페이지</div>
    },{
      path: "*", // 에러 페이지도 이거로 처리 가능
      element: <div>없는 페이지</div>
    }]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <RecoilRoot>
        <Worldcup/>
        {/* <App /> */}
      </RecoilRoot>  
    </RouterProvider> 
  </React.StrictMode>,
)

// 우리 팀플 채점 기준에도 404 에러페이지 꾸미는거 들어감