// querySelector
const button = document.querySelector('.menu-button');
console.log(button);
const menu = document.querySelector('.menu');

// console.log( button );

// eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer() {}

// setTimeout(timer, 3000);

function handleMenu(e) {
  e.preventDefault(); // html의 기본적인 활동을 일시정지 시켜줌 (예를 들어 로그인폼 submit 후 새로고침을 정지시킴)

  // 메뉴에게 is-active 클래스를 넣어준다.

  menu.classList.toggle('is-active');

  console.log(e);

  console.log('open!');
}

button.addEventListener('click', handleMenu);

// Node.addEvent...

// classList

// preventDefault

// input 비밀번호 넣고 정규표현식이랑 같은 값이면 조건 추가, 아니면 벨리데이션 추가하는 함수
button.addEventListener('click', handleMenu);

function handleInput() {
  console.log();

  if (this.value === 'hello') {
    console.log('success');
  }
}

input.addEventListener('input', handleInput);
