import { useReducer } from "react";

// 초기 상태를 정의
const initialState = [];

// reducer 함수를 정의
function reducer(state, action){
    switch(action.type){
        case "add":
            // state의 마지막 요소로 객체를 추가함.
            return [...state, {
                id: Date.now(),
                text: action.text,
                completed: false,
            }];
        case "toggle":
            return state.map((todo) => // todo.completed를 false에서 true로
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        case "delete":
            // filter 메소드를 사용하여 현재 상태(state) 배열을 순회하면서 조건에 맞는 요소만 필터링
            // 조건문은 현재 순회 중인 todo 객체의 id가 액션에서 전달된 id와 일치하지 않는지를 확인합니다. 
            // 일치하지 않는 경우에만 해당 todo 객체를 유지하고 반환합니다. 
            // 따라서 일치하는 todo 객체는 필터링되어 삭제됩니다.
            // 결과적으로, 이 코드는 액션에서 전달된 id와 일치하지 않는 todo 객체만으로 구성된 새로운 배열을 반환합니다. 이를 통해 특정 id에 해당하는 요소를 삭제할 수 있습니다.
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error();
    }
}

function TodoApp(){
    const [state,dispatch] = useReducer(reducer,initialState);
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({type: "add", text});
            setText("");
        }
    };

    const handleToggle = (id) => {
        dispatch({type: "toggle", id});
    }

    const handleDelete = (id) => {
        dispatch({type: "delete", id});
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {state.map((todo) => (
                    <li
                        key={todo.id}
                        style={{textDecoration: todo.completed ? "line-through" : "none"}}
                    >
                        {todo.text}
                        <button onClick={() => handleToggle(todo.id)}>
                            {todo.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;