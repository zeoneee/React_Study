import { useState } from 'react'
import reactLogo from './assets/react.svg' // assets 밑에 있는 img
import viteLogo from '/vite.svg' // pulic 밑에 있는 img
import './App.css'

function App() {
  // const [count, setCount] = useState(0) // useState()의 return 값도 list형태임. 최초의 count = 0

  const[row,setRow] = useState([]);

  if(row.length === 0){ // row == undefined
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
      <table>
        <thead>
          <th>이름</th>
          <th>PM10</th>
          <th>O3</th>
          <th>상태</th>
        </thead>
        
        <tbody>
          {
          row.map(function(obj){
            /*obj 
            "MSRDT":"202305041800","MSRRGN_NM":"도심권","MSRSTE_NM":"중구",
            "PM10":41.0,"PM25":26.0,"O3":0.054,"NO2":0.028,"CO":0.4,"SO2":0.003,
            "IDEX_NM":"보통","IDEX_MVL":70.0,"ARPLT_MAIN":"O3" */
            return <tr>
              <td>{obj.MSRSTE_NM}</td>
              <td>{obj.PM10}</td>
              <td>{obj.O3}</td>
              <td>{obj.IDEX_NM}</td>
            </tr>
          })}
        </tbody>
      </table>  
      </div>

      

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> 
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}


      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App

// setCount(9)
// setCount((count) => count + 1)
// setCount(count + 1) -> 이건 pure function이 아님