/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// 일반함수는 arguments를 갖고 있음 vs 화살표함수는 arguments를 갖고 있지 않음
// arguments 는 유사배열, rest는 진짜배열
let calcAllMoney = (...args) => {
  /* normal function
   let total = 0;
  total = args.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
   return total; */

  //arrow function
  let total = 0;
  total = args.reduce((acc, cur) => acc + cur, 0);
};
// return total;

let calcAllMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);

calcAllMoney(1000, 5000, 4500, 15000);

// 화살표 함수와 this

// 일반 함수의 양면의 얼굴 : 함수 이자 생성자(앞에 대문자로 작성)(constructor)
// 생성자 함수를 클래스로 분리, 애로우 함수로 생성자 함수를 만들 수 없음

// 일반함수
// - constructor 내장
// - This : 나를 호출한 대상을 this로 찾음
// 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표함수
// -constructor 비내장
// - this : 자체를 바인딩(가지지)않음
// 화살표 함수는 this를 가지지 않으니까 위에 있는 객체의 this를 참조, 하지만 일반 함수는 this를 계속 찾기 때문에 전역this를 불러옴
// 객체 안에 메서드 안의 함수로 많이 사용됨 => 내 상위 this를 가져오기 위해

const user = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log('일반 함수 :', this);

    function sayHi() {
      console.log('sayHi : ', this);
    }

    sayHi();
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
};

console.log(pow(2, 53));

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

powExpression(2, 53);

// repeat(text: string, repeatCount: number): string;
// 1) for문
// let repeat = (text, repeatCount) => {
//   let result = ' ';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };

// repeat('안녕', 5);

let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

repeat('hello😘', 3); // 'hello😘hello😘hello😘'

let repeatExpression = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, '');
};
