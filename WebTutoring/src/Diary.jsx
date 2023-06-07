import { useLocation, useNavigate } from "react-router-dom";
import {diaries} from "./database";

function Diary({idx}){
    const navigate = useNavigate();
    const location = useLocation();

    const diaryNum = location.state.idx;
    const title = diaries[diaryNum].t;

    const clickDiary = () => { // 해당 diary component로 가는거지
        navigate(`/diary/${idx}`);
    }

    return(
        <div style={styles} onClick={clickDiary}>
            <p>My diary</p>
            <h1>{title.substr(0,10)}</h1>
            <p>{diaryNum}</p>
        </div>
    );
}

const styles = {
    width: "30vw",
    height: 150,
    backgroundColor: "grey",
}

export default Diary;