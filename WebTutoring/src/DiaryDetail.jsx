import { useLocation, useNavigate } from "react-router-dom";
import {diaries} from "./database";

function DiaryDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const diaryNum = parseInt(location.pathname.split("/")[2]);
    const title = diaries[diaryNum].t;
    const contents = diaries[diaryNum].c;

    const goBack = () => {
        navigate("/dtitle", {state:{idx:diaryNum}});
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            <h4>{}</h4>
            <h1>제목: {title}</h1>
            <h3>오늘의 일기</h3>
            <div
                style={{
                    width: "70vw",
                    height: 200,
                    margin: 10,
                    padding: 10,
                    backgroundColor: "lightblue",
                }}>
                    {contents}
                </div>

                <button onClick={goHome}>홈으로</button>
                <button onClick={goBack}>뒤로 가기</button>
        </div>
    )
}

export default DiaryDetail;