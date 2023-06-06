import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Root(){
    const navigate = useNavigate();
    const url = location.href;

    return (
        <div>
            <h1>김지현의 react 공부</h1>
            <div id="gnb">
                <button onClick={()=> navigate(-1)}>뒤로가기</button>
                <button onClick={()=> navigate(+1)}>앞으로가기</button>
                <Link to = "/worldcup" style={{marginRight: " 20px", fontWeight: url.includes("worldcup") ? "bold" : "normal"}}>
                    이상형월드컵 </Link>
                <Link to = "/about" style={{marginRight: " 20px", fontWeight: url.includes("about") ? "bold" : "normal"}}>
                    소개 </Link>
                <Link to = "/login" style={{marginRight: " 20px", fontWeight: url.includes("login") ? "bold" : "normal"}}>
                    로그인</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Root;