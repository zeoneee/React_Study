# Arrow function

react에서 함수는 컴포넌트의 동작을 정의하는데 사용된다. 해당 함수를 작성하는 방법에는 일반 함수와 화살표 함수 두 가지가 있다.

- 일반 함수와 화살표 함수의 주요 차이점은 this 키워드가 동작하는 방식이다. 일반 함수는 호출되는 위치에 따라 this가 결정된다. 반면에 화살표 함수는 자신이 선언된 컨텍스트에서 this를 가져온다. 이로 인해 일반 함수와 화살표 함수는 this가 필요한 경우에 서로 다르게 동작할 수 있다.

## 화살표 함수

- 화살표함수는 `return` 명령어 없이도 함수 실행을 종료시키고 값을 반환한다.

### 화살표 함수의 특징

1. this와 arguments를 바인딩하지 않는다.
2. 항상 익명 함수로 정의된다.
3. 반환 값이 암묵적으로 결정된다.
4. 문법이 간결하다.

## 예시

### 일반 함수

- 다음 코드는 일반 함수를 사용하여 React component를 정의하는 예시이다.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

- 위 코드에서는 handleClick 함수를 일반 함수로 정의하고, 생성자에서 this를 바인딩한다.

### 화살표 함수

```jsx
class MyComponent extends React.Component {
  state = {
    count: 0
  };
  
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

- 위 코드에서 handleClick 함수를 화살표 함수로 정의하고 있다. 이로 인해 this가 MyComponent 인스턴스를 가리키므로 별도의 바인딩이 필요하지 않다.