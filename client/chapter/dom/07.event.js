/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭 했습니다');
}

// first.addEventListener('click', handleClick);
// 제거 : first.removeEventListener('click', handleClick);

// 다른 종류의 마우스 이벤트
// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mouseleave', handleClick);
// first.addEventListener('mousemove', handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
// 클로저 때문에 가능한 환경

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);

  //   node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent('.first', 'click', handleClick);

// getNode('.second').addEventListener('click', remove);

// 축구공 실습

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

//   ground.insertAdjacentHTML('beforeend',template)
// }))

/* -------------------------------------------------------------------------- */
/*                      디바운스 함수  - 멈추면 실행                                */
/* -------------------------------------------------------------------------- */

ground.addEventListener(
  'mousemove',
  debounce((e) => {
    // console.log( e );
  })
);

function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) {
    // console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, 100);
  };
}

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

/* -------------------------------------------------------------------------- */
/*            쓰로틀링 함수 - 일정 시간마다 계속 호출, 시간 설정 가능                     */
/* -------------------------------------------------------------------------- */

function throttle(callback, limit = 100) {
  s;
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

funcB.apply(funcA, [1, 2, 3]);

// call : this를 대신 전달할 수 있고 인수를 값으로 전달시켜 함수 실행
// apply : this를 대신 전달하고 인수를 배열로 전달시켜 함수 실행
// bind : 실행시키지 않음, 함수를 변수로 담아서 변수값으로 실행 가능, 함수값을 묶어만 주는 역할
// eventListener 뒤에는 함수 본문이 와야함, 바로 함수를 실행해선 안됨 => 이때 bind 사용

function func(a, b) {
  console.log('this : ', this);
  console.log('A : ', a);
  console.log('B : ', b);
}

func.call('tiger', 1, 2);
