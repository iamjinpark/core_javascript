import {
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
  removeClass,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

console.log(rollingButton);

// [phase-1]
// 1. 주사위 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation()이 실행될 수 있도록
// 3. 버튼을 한번 더 클릭하면 주사위 굴리기를 멈추기 실행 : toggle
// [phase-2]
// 1. 주사위의 눈을 가져온다.
// 2. 태그를 만든다
// 3. html에 뿌려준다.
// 4. 기록 버튼을 누를때 값이 적용되도록 실행

let count = 0;
let total = 0;

function createItem(value) {
  //1. 주사위 눈을 가져온다

  //2. 태그를 만든다.
  const template = `
  <tr>
  <td>${count++}</td>
  <td>${value}</td>
  <td>${(total += Number(value))}</td>
  </tr>
  `;

  return template;
}

function randomRecordItem() {
  const diceValue = memo('cube').dataset.dice;
  console.log(diceValue);
  // 3.html에 뿌려준다
  insertLast('.recordList tbody', createItem(diceValue));
  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      // 실행
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 정지
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked; // ture 이면 false로 값을 계속 반복시킴
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  randomRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents(getNode('tbody'));
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
