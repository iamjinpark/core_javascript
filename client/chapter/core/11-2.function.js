/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식

let calculateTotal = function (a, b, c, d, e, f, g) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  //arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기

  //console.log(arguments); arguments는 객체

  let total = 0;
  // for문
  //   for (let i = 0; i < arguments.length; i++) {
  //     total += arguments[i];}

  //for of 문
  //   for (let value of arguments) {
  //     total += value;
  //   }

  //배열의 메서드 : forEach, reduce
  // 1) 빌려쓰기로 배열 만들고 배열의 합 도출 (일회성)
  //   Array.prototype.forEach.call(arguments, function (item) {
  //     total += item;
  //   });

  //   일회성이 싫다면 .. arguments의 부모 자체를 바꿔버리면? (부모를 오염, 그러나 함수 안에서 오염은 괜찮)
  //   arguments.__proto__ = Array.prototype;
  //   console.log(arguments);

  // 2) 진짜 배열 만들기
  //   const arr = Array.prototype.slice.call(arguments);
  //   const arr = Array.from(arguments);
  const arr = [...arguments];
  //   console.log(arr);

  //진짜 배열로 만든 뒤 배열 속성(forEach)를 사용해서 배열의 각 요소에 반복적으로 접근한 뒤 출력, 그리고 토탈로 한꺼번에 더해줌
  arr.forEach(function (element) {
    total += element;
  });

  //reduce 사용
  //   total = arr.reduce(function(acc,cur){
  //     return acc + cur
  //   },0)

  // return arr.reduce((acc,cur) => acc + cur,0)

  // accumulate, current 의 약자.
  //, 뒤의 값이 초기값으로 설정, 여기선 0이 초기값

  return total;
};
const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
  // 변수명이 즉 함수명
};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  //호출은 변수명으로 하되 함수 이름을 따로 가질 뿐
};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  // let isActive = false;
  // let success = function(){
  //   console.log('성공!')
  //  }
  // let fail = function(){
  //   console.log('error')
  //  }

  if (isActive) success();
  else fail();
  // isActive ? success() : fail()
};

cb(
  false,
  function () {
    console.log('성공!');
  },
  function () {
    console.log('실패!');
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

(function a() {
  /*함수가 선언됨과 동싱에 실행되는 것을 말합니다.
  var는 블록스코프로 갇히지 않고 가두려면 함수스코프를 써야함
  */
})();

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// import css from 'css.js' // module

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 모듈화

// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css;
})();

// map : 값을 반환함. 단 배열만 반환 => react 랜더링 시 배열만 사용 가능함
// filter : 값을 반환함 단, 배열만 반환
// reduce : 값을 반환함, 그래서 return을 써줌
// forEach : 값을 반환하지 않음, return을 써도 반환되지 않음, 그냥 계산만 해줌

const arr = ['김다영', '이경화', '김용범'];

// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })

// console.log(name);

// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');

//   return acc;
// },[])

// console.log( name );

const name = arr.map(function (item) {
  return item + '-hi';
});

console.log(name);
