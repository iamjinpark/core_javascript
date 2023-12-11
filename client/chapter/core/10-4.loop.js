/* ---------------- */
/* For In Loop      */
/* ---------------- */
//반복을 주는 이유가 원하는 값을 캐치하고 가져오고 확인하려는 형태로 쓰다 보니 보다 더 깔끔한 형태의 객체 순환, 배열 순환을 찾을땐 in/of를 사용

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// 객체에서 내가 원하는 값이 있어?
// in문
let j = 0;
while (j < 11) {
  j++;
  if (j % 2 === 0);
  {
    // console.log(j);
  }
}

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는? hasOwnProperty()
Object.prototype.nickName = 'tiger';
//진짜 오브젝트 타입에 들어가서 훼손하는 행위, 이러면 나중에 포인을 사용할때 게속 출력되는 결과를 얻게됨 (계속 따라다님)

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

const key = 'createAt';

// console.log(javaScript.hasOwnProperty(key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key));
  //   console.log(key);
}

//해당 객체에 해당 키값을 갖고 있는지 확인하는 방법, 실제 조상의 오브젝트에 능력에 접근해 값을 바꾸게 되면 키값에 모두 수집되게 되면서 정확한 값을 수집하기 어려워짐, 내가 정확히 원하는 값을 얻기 위해선 헤즈원프로퍼티를 사용하면 됨, 객체에 헤즈원프로퍼티를 적용하면 얻을 수 있지만 커스텀이 가능해 작동하지 않을수도 있음, 객체가 오염되지 않은 상태에서 찐 객체 능력으로 헤즈원프로퍼티 능력을 빌려 쓰면 변하지 않고 원하는 값을 얻을 수 있음, 그래서 콜이라는 메서드를 같이 불러 사용, 이거까지 알아봤으니 포인문으로 들어가서 인문을 여러개 사용하는걸로 봄, 포 인으로 시작되지만 앞에 렛 키로 변수를 선언해줘야 함, 보통 키를 선언하기 때문에 키로 주로 선언, 포 반복문으로 오브젝트로 해당키에 계속 값을 넣어줌, 그래서 오브젝트가 갖고있는 키값을 출력할 수 있음!

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(key);
}

//객체지향 - 객체에 직접 접근해서 속성을 바꿔주는 것

const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true,
  },
});
