import './Worldcup.css'

import img1 from './assets/너구리.jpeg'
import img2 from './assets/콕콕콕 라면볶이.jpeg'
import img3 from './assets/무파마.jpeg'
import img4 from './assets/불닭볶음면.jpeg'
import img5 from './assets/사리곰탕.jpeg'
import img6 from './assets/새우탕.jpeg'
import img7 from './assets/신라면.jpeg'
import img8 from './assets/오징어짬뽕.jpeg'
import img9 from './assets/육개장.jpeg'
import img10 from './assets/진라면 매운맛.jpeg'
import img11 from './assets/진라면 순한맛.jpeg'
import img12 from './assets/짜파게티.jpeg'
import img13 from './assets/짬뽕왕뚜껑.jpeg'
import img14 from './assets/참깨라면.jpeg'
import img15 from './assets/컵누들 매콤한맛.jpeg'
import img16 from './assets/컵누들 우동맛.jpeg'
import { useEffect } from 'react'
import { useState } from 'react'

function Worldcup() {

    const candidate = [
        {name: '너구리', src: img1},
        {name: '콕콕콕 라면볶이', src: img2},
        {name: '무파마', src: img3},
        {name: '불닭볶음면', src: img4},
        {name: '사리곰탕', src: img5},
        {name: '새우탕', src: img6},
        {name: '신라면', src: img7},
        {name: '오징어짬뽕', src: img8},
        {name: '육개장', src: img9},
        {name: '진라면 매운맛', src: img10},
        {name: '진라면 순한맛', src: img11},
        {name: '짜파게티', src: img12},
        {name: '짬뽕왕뚜껑', src: img13},
        {name: '참깨라면', src: img14},
        {name: '컵누들 매콤한맛', src: img15},
        {name: '컵누들 우동맛', src: img16}
    ]

    const [game, setGame] = useState([]);
    const [round, setRound] = useState(0);
    const [nextGame, setNextGame] = useState([]);

    useEffect(() => {
        setGame(candidate.map(c => {
            return {name: c.name, src: c.src, order: Math.random()}
        }).sort((l,r) => {
            return l.order - r.order; // order 기준으로 오름차순 정렬
        }));
    }, []);

    useEffect(() => {
        if(game.length > 1 && round + 1 > game.length /2) { // 강이 바뀔 때 16->8->4->2->1
            setGame(nextGame); // nextGame에 select된 애들이 저장되고 있었으니까, 저장된 애들로 다시 setGame
            setNextGame([]); // nextGame은 다시 빈배열로
            setRound(0);    // round도 0값으로 
        }
    }, [round]);

    if (game.length === 1){
        return <div>
            <p>이상형 월드컵 우승</p>
            <img src={game[0].src} /> <p>{game[0].name}</p>
        </div>
    }

    if (game.length === 0 || round + 1 > game.length / 2) return <p>로딩중입니다</p>;
    
    return <div>
        <p>이상형 월드컵 {round +1} / {game.length/2} <b>{game.length === 2 ? "결승" : game.length + "강"}</b> </p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={game[round*2].src} onClick = { () => {
                setNextGame((prev) => prev.concat(game[round*2]))
                setRound(round => round + 1)
            }}/>
            <img src={game[round*2 + 1].src} onClick = { () => {
                setNextGame((prev) => prev.concat(game[round*2 + 1]))
                setRound(round => round + 1)
            }}/>
            {/* <img src={img1} onClick={() => alert('오동통통토로롱 농심 너구리')}></img>
            <img src={img2} onClick={() => alert('콕코로로콕콕!')}></img> */}
        </div>
        </div>
}

export default Worldcup;
