import {diaries} from "./database";
import Diary from "./Diary";

function DiaryList(){
    return (
        <div>
            {diaries.map((e, idx) => <Diary idx={idx}/>)}
        </div>
    );
}

export default DiaryList;