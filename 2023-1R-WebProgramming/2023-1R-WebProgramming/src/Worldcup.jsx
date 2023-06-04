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
import { useState, useReducer, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { EpisodeState } from './store/episode'
import Winner from './Winner'


function reducer(state, action){
    if(action.type === "startGame"){
        if (action.value.stat){
            return{ ...state, game: action.value.game, stat: action.value.stat};
        } else {
            return {...state, game: action.value.game}
        }
    } else if (action.type ==="click"){
        // game의 마지막 경기인지 아닌지 확인
        if(state.game.length > 1 && state.round + 1 >= state.game.length / 2){
            return {
                ...state,
                round: 0,
                nextGame: [],
                game: state.nextGame.concat(state.game[action.value]),
                stat: {
                    ...state.stat,
                    [state.game[action.value].name]: state.stat[state.game[action.value].name] +1
                }
            }
        }
        else{ // 마지막 경기가 아닐 때
            return{
                ...state,
                round: state.round + 1,
                nextGame: state.nextGame.concat(state.game[action.value]),
                stat:{ ...state.stat,
                    [state.game[action.value].name]: state.stat[state.game[action.value].name]+1
                }
            };
        }
    }
    return state;
}


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

    const initialState = {
        game: [],
        round: 0,
        nextGame: [],
        stat: {
            '콕콕콕 라면볶이' : 0,
            '너구리' : 0,
            '무파마' : 0,
            '불닭볶음면' : 0,
            '사리곰탕' : 0,
            '새우탕' : 0,
            '신라면' : 0,
            '오징어짬뽕' : 0,
            '육개장' : 0,
            '진라면 매운맛':0,
            '진라면 순한맛' : 0,
            '짜파게티' : 0,
            '짬뽕왕뚜껑' : 0,
            '참깨라면' : 0,
            '컵누들 매콤한맛' : 0,
            '컵누들 우동맛' : 0
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [epi, setEpi] = useRecoilState(EpisodeState);

    // 처음 worldcup 컴포넌트가 단 한 번 실행하는 함수
    useEffect(() => {
        setEpi(1);
        const 문자열 = localStorage.getItem("월드컵");  // local storage 활용하기
        const 통계정보 = !문자열 ? JSON.parse(문자열) : {};
        const shuffledCandidate = candidate.map(c => {
            return {name: c.name, src: c.src, order: Math.random()}
        }).sort((l,r) => {
            return l.order - r.order;
        });
        dispatch({type: "startGame", value: {game: shuffledCandidate, state: 통계정보}});
    }, []);

    useEffect(()=> {
        if(epi===1) document.title = '첫 번째 게임';
        else if(epi===2) document.title = "두 번째 게임";
        else if(epi>3) document.title = "게임 이용 시간이 3시간 지났습니다";
    })

    if (state.game.length === 1){
        return (
        <Winner useung={state.game[0]} stat={state.stat}>
            <table>
                {Object.keys(state.stat)
                .sort((a, b) => state.stat[b] - state.stat[a])
                .map(name => {
                    return <tr key={name}>
                        <td>{name}</td>
                        <td>{state.stat[name]}</td>
                    </tr>
                })}
            </table>
        </Winner>
    )
    }

    
    if (state.game.length === 0 || state.round + 1 > state.game.length / 2) return <p>로딩중입니다</p>;
    const left = state.round*2, right = state.round*2+1;
    console.log(state);

    
    return (
    <div>
        <div className='title-area'>
            <p>이상형 월드컵 {state.round +1} / {state.game.length/2} <b>{state.game.length === 2 ? "결승" : state.game.length + "강"}</b> </p>
        </div>
        <div className='content-area'>
                <div className='left-area'>
                    <img src={state.game[left].src} onClick={() => {dispatch({type:"click", value: left})}}/> 
                    <p>{state.game[left].name}</p>
                </div>
                <div className='right-area'>
                    <img src={state.game[right].src} onClick={() => {dispatch({type:"click", value: right})}}/>
                    <p>{state.game[right].name}</p>
                </div>    
        </div>
    </div>
    )
}

export default Worldcup;