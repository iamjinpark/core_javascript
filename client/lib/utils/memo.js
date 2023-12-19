// 피보나치 메모이제이션 : 필요한 항목들을 저장해두면 보다 편리하게 쓸 수 있는 기능

export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();
