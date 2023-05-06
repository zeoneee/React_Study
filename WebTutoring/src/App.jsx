import { useState } from 'react'
import './App.css'
import Diary from './Diary'

function App() {
  // const [names, setNames] = useState(['tom','merry'])
  const [names, setNames] = useState([{name: 'sam', age:23}, {name:'merry', age:3}])
  const [name, setName] = useState('')

  function inputName(str){
    setName(str)
    setNames([...names, str])
  }

  const title = "hi"
  const cont = "Nice to meet you"

  // 사용자가 input을 받게 하고 그 값이 만약 "tom"과 같다면
  // <p>{name}</p>
  // react에서 변경되는 값은 상태 관리를 따로 해줘야함. 

  return (
    <div className="App" style={styles.container}>
      <input id="inp" onChange={e=> inputName(e.target.value)} value={name}/>
      {names.map(e=><Diary title={e.name} contents={e.age} />)}
      {/* {names.map(e=> <p>{e}</p>)} */}
      {/* <input onChange={e=>inputName(e.target.value)} value={name}/> 
      {name ==="tom" ? <p>반가워요</p> : <p>{name}</p>} */}
    </div>
  )
}

const styles = {
  container:{
    flex: true
  }
}

export default App
