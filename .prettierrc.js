module.exports = {
  //한 줄이 이 글자수를 넘게 되면 들여쓰기되어 코드가 세로로 정리된다. (default: 80)
  "printWidth": 120,
  "tabWidth": 3,
  //탭 사용 여부. 참이면 탭이있는 줄을 들여 쓰기 한다. (default: false)
  "useTabs": false,
  //세미클론 강제 여부 (default: true)
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  /*객체, 배열, 함수 등의 후행에 쉼표를 찍을지 제어
  "none" - 쉼표를 붙히지 않음
  "es5" - ES5에서 유효한 후행 쉼표 붙힘 (객체, 배열 등)
  "all" - 가능하면 후행 쉼표를 붙힘 (함수 인수)*/
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "lf",
  //객체 리터럴 사용시 괄호에 공백 삽입 여부 (default: true)
  "bracketSpacing": true,
  // JSX의 마지막 `>`를 다음 줄로 내릴지 여부 
  "jsxBracketSameLine": true,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  //vue 파일의 script와 style태그 들여쓰기 여부
  "vueIndentScriptAndStyle": false,
  //맨마지막 줄 넣는지 여부
  "endOfLine": "auto"
}