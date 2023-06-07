import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./atom";


function Counter(){
    // useReducer를 사용하여 state, dispatch 함수 생성
    const [counter, setCounter] = useRecoilState(counterState);
    const count = useRecoilValue(counterState);

    return (
        <div>
            <p>Count: {counter} & {count}</p>
            <button
                onClick={() => {
                    setCounter((e) => e+1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCounter((e) => e-1);
                }}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter;