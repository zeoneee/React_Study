import { useState } from 'react'
import reactLogo from './assets/react.svg' // assets 밑에 있는 img
import viteLogo from '/vite.svg' // pulic 밑에 있는 img
import './App.css'

function App() {
  const [row, setRow] = useState([]);
  // const [count, setCount] = useState(0) // useState()의 return 값도 list형태임. 최초의 count = 0

  const loadData = () => {
    fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25").then(
      function(res2){
        res2.json().then(function(res3){
          setRow(res3.RealtimeCityAir.row);
        })
      }
    )
  }

  console.log(row);
  // const res = await fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25");
  // const res2 = await res.json();
  // console.log(res2.RealtimeCityAir.row) -> 이 과정을 사용할 수 없음. 

  return (
    <>
      <div className='show-api'>
        <button onClick={loadData}>
          LoadData
        </button>
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
            {row.map(function(obj, index){
              return (
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
