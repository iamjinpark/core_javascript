/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;
let weekend;

console.log(typeof (days + ''));
console.log(typeof (weekend + ''));

// boolean

let isclicked = false;
console.log(isclicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend)); //NaN

// null

let money = null;
console.log(Number(money)); //0

// boolean

let cutie = true; //true=1, false=0
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num));

console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string (숫자 같은 문자)

const width = '105.3px';
console.log(Number(width));
//parseInt
//parseFloat

console.log(parseInt(width, 10));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean('0'));

console.log(!friend);
