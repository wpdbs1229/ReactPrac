
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