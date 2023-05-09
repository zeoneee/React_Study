import { useState } from 'react'
import reactLogo from './assets/react.svg' // assets 밑에 있는 img
import viteLogo from '/vite.svg' // pulic 밑에 있는 img
import './App.css'
import { useEffect } from 'react';

function App() {
  const [row, setRow] = useState([]);
  
  useEffect(() => {
    console.log('mount or update');

    return () => {
      console.log('unmount');
    }
  }); 

  useEffect(() => {
    console.log('mount only');
    fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25").then(
      function(res2){
        res2.json().then(function(res3){
          setRow(res3.RealtimeCityAir.row);
        })
      }
    )
  }, [])

  useEffect(() => {
    console.log('update only');
  }, [row]); // row가 update 될 때만 실행되는 함수

  // const loadData = () => {
  //   fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25").then(
  //     function(res2){
  //       res2.json().then(function(res3){
  //         setRow(res3.RealtimeCityAir.row);
  //       })
  //     }
  //   )
  // }

  return (
    <>
      <div className='show-api'>
        {/* <button onClick={loadData}>
          LoadData
        </button> */}
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>PM10</th>
              <th>O3</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {
            row.map((obj, index, ) => {
              return ( // 괄호 안쓰고 그냥 return <tr key = ... 이런식으로 한 줄에 작성해도됨. 대신 return하고  enter 할거면 () 필요
              <tr key={index}>
                <td>{obj.MSRSTE_NM}</td>
                <td>{obj.PM10}</td>
                <td>{obj.O3}</td>
                <td>{obj.IDEX_NM}</td>
              </tr>
              )
            })}
          </tbody>
        </table>  
      </div>

      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App

// setCount(9)
// setCount((count) => count + 1)
// setCount(count + 1) -> 이건 pure function이 아님
