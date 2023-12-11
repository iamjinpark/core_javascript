/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(Array.isArray([3, 2, 5, 1]));

// 유틸함수로 만드는 isArray
const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsArray(data) {
  //   return Array.isArray(data);
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
  // Object의 메서드인 toString을 빌려오고 앞에 object 글자를 잘라주기 위해 슬라이스, 그리고 소문자로 받아 array 배열과 일치하는지 비교값을 리턴
}

/* 요소 순환 ---------------------------- */

const arr = [10, 100, 1000, 10000];

// forEach

const span = document.querySelectorAll('span');

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

const reverseArray = arr.reverse();
console.log(reverseArray);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// const reverseArray = arr.reverse();

// console.log( reverseArray );

console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);

// 1. 다 인자로 콜백 함수가 들어간다. 보통 화살표 함수로 많이 쓴다.
// 2. VS Code에서 함수를 쓰고 마우스 오버를 하면 설명이 보이므로 함수 이름만 알아도 대충 사용이 가능하다.
