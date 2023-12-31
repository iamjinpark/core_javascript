/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '호동이',
  __proto__: tiger,
};

// 생성자 함수 (호출할때 new를 붙임, 무조건 객체를 반환)

/* function button (){}
function button2 (){}

button() 일반함수
new button2() 생성자함수

함수를 호출할 때의 new 키워드의 여부 */

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

function Tiger(name) {
  Animal.call(this); //생성자 함수에서 연결해서 사용하는 방법
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
}

Tiger.bark = function () {
  return '어흥!';
};

const 한라산호랑이 = new Tiger('포동이');
const 금강산호랑이 = new Tiger();

// call로 this에 값 전달하기
function sum(a, b, c) {
  // console.log(this);
}

sum.call('안녕', 1, 2, 3); // 바로 실행
// apply
// bind
