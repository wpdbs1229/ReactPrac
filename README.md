#### CRA

`npm install -g create-react-app`

- create-react-app(CRA) 툴 자체를 글로벌(global) 로 설치하는 명령어.
- 글로벌 설치하면, 터미널 아무 데서나 create-react-app 명령어를 사용 가능

```
npx create-react-app 파일이름 --template=typescript 
yarn create react-app 파일이름 --template typescript
```

- 설치 없이 최신 CRA로 TypeScript React 프로젝트 바로 생성

#### Prettier

- `yarn add --dev prettier`
- `npm install -D prettier`

#### ESLint

- `yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier`
- `eslint-config-prettier` : eslint에서 prettier와 충돌할 수 있는 rule을 끔
- `eslint-plugin-prettier` : prettier에서 eslint의 rules로 동작

### CSS - in - JS

- 자바스크립트 내에서 css를 작성하는 방식
- 대표적으로 styled-component, emotion등이 있음
- 현재 사용 중인 스타일만 DOM에 포함시킬 수 있음
- 별도 패키지를 설치하기 떄문에 용량이 증가함(스크립트 전환이 필요하여 속도도 다소 느려짐)
- Emotion vs styled-component
- `yarn add @emotion/react @emotion/styled`

### Props

- properties의 줄임말로 컴포넌트에 어떤 값을 넘겨주기 위해 사용
- 이를 통해 부모 컴포넌트가 자식 컴포넌트레엑 데이터를 전달할 수 있음
- 다만 자식 컴포넌트의 입장에서는 전달받은 값이기 때문에 수정이 불가능하다는 특징

### Stat

- 리액트에서 이벤트에 의해 변경되는 동적인 값을 의미
- 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용되면 컴포넌트 안에서 데이터를 변경할 수 있음
- Props는 부모 컴포넌트가 설정하는 값으로 읽기 전용으로만 사용했지만,
- State는 하위 컴포넌트에서도 데이터를 변경할 수 있는 특징이 있음
- State를 사용하기 위해서는 useState라는 Hook을 사용
- `const [state, setState] = useState(initialState);`