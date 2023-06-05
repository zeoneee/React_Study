import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { EpisodeState } from "./store/episode";

function Winner({useung, stat, children}){

    const [epi, setEpi] = useRecoilState(EpisodeState); // 굳이 epi값이 필요 없다면 epi를 비워둘 수도 있음 그냥 [epi, setEpi]를 [,setEpi]로
    useEffect(()=> {
        console.log(epi)
        setEpi(epi+1);
    },[]);

    localStorage.setItem("2019112587",JSON.stringify(stat)); // stat을 문자열로 바꾸는 코드가 JSON.stringify()  / JSON.parse는 문자열로 만든 dictionary 복구시키는 함수
    return (
    <div className='winner'>
        <div className='title-area'>
            <p>이상형 월드컵 우승</p>
        </div>
        <img src={useung.src} /> <p id='winner-name'>{useung.name}</p>
        <p>승리 횟수 : {stat[useung.name]}번 승리</p>

        {children}
    </div>
    );
}

export default Winner;

// 되도록이면 recoilstate를 안 쓰는 편이 유리함