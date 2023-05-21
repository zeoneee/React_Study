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
    const [selectedImg, setSelectedImg] = useState(null); // 선택하면 3초 대기시키는 함수

    const [stat, setStat] = useState(() => { // 새로운 변수 stat을 만듬
        const initialState = {};
    
        candidate.forEach(item => {
            initialState[item.name] = 0;
        });
    
        return initialState;
    });

    // 처음 worldcup 컴포넌트가 단 한 번 실행하는 함수
    useEffect(() => {
        const 문자열 = localStorage.getItem("월드컵");  // local storage 활용하기
        if (문자열 != null){
            setStat(JSON.parse(문자열));
        }

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

    useEffect(() => {
        if (selectedImg) {
            const timer = setTimeout(() => {
                setSelectedImg(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [selectedImg]);

    if (game.length === 1){
        // setStat({...stat, 
        //     [game[0].name]: stat[game[0].name]+1 
        // })
        localStorage.setItem("2019112587",JSON.stringify(stat)); // stat을 문자열로 바꾸는 코드가 JSON.stringify()  / JSON.parse는 문자열로 만든 dictionary 복구시키는 함수
        return (
        <div className='winner'>
            <div className='title-area'>
                <p>이상형 월드컵 우승</p>
            </div>
            <img src={game[0].src} /> <p id='winner-name'>{game[0].name}</p>
            <p>승리 횟수 : {stat[game[0].name]}번 승리</p>
            {/* <table>
                {game.flatMap(item => {
                    const name = item.name;
                    const srt = item.src;
                    const win = stat[name];
                    return <tr key={name}>
                        <td><img src={src}/></td>
                        <td>{name}</td>
                        <td>{win}</td>
                    </tr>
                })}
            </table> */}
            <table>
                {Object.keys(stat)
                .sort((a, b) => stat[b] - stat[a])
                .map(name => {
                    return <tr key={name}>
                        <td>{name}</td>
                        <td>{stat[name]}</td>
                    </tr>
                })}
            </table>
        </div>
        )
    }

    if (game.length === 0 || round + 1 > game.length / 2) return <p>로딩중입니다</p>;
    const left = round*2, right = round*2+1;
    console.log(stat);

    const leftfunction = () => {
        setStat({...stat, // 저 라면 set을 일단 불러오고 뒤에 선택된 애들은 prevStat[game[left].name]+1의 값으로 대치됨
            [game[left].name]: stat[game[left].name]+1 // '라면볶이' : 1 이렇게 저장됨
        })
        // setStat((prevStat) => { -> 이 함수를 위에 함수로 바꿈
        //         prevStat[game[left].name] = prevStat[game[left].name]+1;
        //         return prevStat;
        //     }
        // );
        // setSelectedImg(game[round*2].src);
        setNextGame((prev) => prev.concat(game[left]));
        setRound(round => round + 1);
        }

    const rightfunction = () => {
        setStat({...stat, 
            [game[right].name]: stat[game[left].name]+1
        })
        // setSelectedImg(game[round*2+1].src);
        setNextGame((prev) => prev.concat(game[right]));
        setRound(round => round + 1);
        }
    
    return (
    <div>
        <div className='title-area'>
            <p>이상형 월드컵 {round +1} / {game.length/2} <b>{game.length === 2 ? "결승" : game.length + "강"}</b> </p>
        </div>
        <div className='content-area'>
            {selectedImg && (
                <div className='winner'>
                <img src={selectedImg} alt={selectedImg}/>
                </div>
            )}
            {!selectedImg && (
                <>
                <div className='left-area'>
                    <img src={game[left].src} onClick={leftfunction}/> 
                    <p>{game[left].name}</p>
                </div>
                <div className='right-area'>
                    <img src={game[right].src} onClick={rightfunction}/>
                    <p>{game[right].name}</p>
                </div>
                </>
            )}    
        </div>
    </div>
    )
}

export default Worldcup;