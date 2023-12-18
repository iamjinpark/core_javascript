/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// const first = document.querySelector('.first');
// const spanList = document.querySelectorAll('span');

// 유틸함수 만들기

const first = getNode('.first');

function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('node에는 문자만 들어갈 수 있습니다.');
  }
  return document.querySelector('.node');
}

/* 문서 대상 확인 */
// - matches : 현재 대상(target)에 항목(selector)이 있어?

console.log(first.matches('span')); // target에 항목(selector)이 있어?

// - contains : target(부모)안에 자식 노드가 포함되어있어?

console.log(getNodsse('h1').contains(getNode('.second'))); // target(부모) 안에 자식 노드가 포함됐어?
