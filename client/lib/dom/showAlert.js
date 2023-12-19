import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';
import { isString } from '../utils/typeOf.js';

//매개변수에 노드,메세지,시간을 입력
/**
 * 에러 메세지를 보여주는 함수
 * @param {HTMLElement | string} node
 * @param {String} message
 * @param {Number} timeOut
 * @return void
 */
export function showAlert(node, message, timeOut = 1000) {
  // node가 문자인지 판별
  if (isString(node)) {
    node = getNode(node);
  }

  node.textContent = message;

  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeOut);
}
