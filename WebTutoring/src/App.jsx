import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DiaryList from "./DiaryList";
import DiaryDetail from "./DiaryDetail";
import Diary from "./Diary";
import TodoApp from "./TodoApp";
import ParentComp from "./ChildComp";
import Counter from "./Counter";


function App(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/person" element={<Person/>}/>
        <Route exact path="/diary" element={<DiaryList/>}/>
        <Route exact path="/diary/:diaryNum" element={<DiaryDetail/>}/>
        <Route exact path="/dtitle" element={<Diary/>}/>
        <Route exact path="/todo" element={<TodoApp/>}/>
        <Route exact path="/par" element={<ParentComp/>}/>
        <Route exact path="/cnt" element={<Counter/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function Home(){
  return <h2>홈페이지</h2>;
}

function Person(){
  return <h2>마이 페이지</h2>;
}

function NotFound(){
  return <h1>페이지가 없습니다</h1>;
}

function Header(){
  return (
    <div style={{flex: "true", flexDirection: "row", backgroundColor: "grey"}}>
      <div style={{width: 100, display: "inline-block"}}>
        <Link to="/">Home</Link>
      </div>
      <div style={{width: 100, display: "inline-block"}}>
        <Link to="/person">Mypage</Link>
      </div>
      <div style={{width: 100, display: "inline-block"}}>
        <Link to ="/diary">Diary</Link>
      </div>
    </div>
  )
}

export default App;