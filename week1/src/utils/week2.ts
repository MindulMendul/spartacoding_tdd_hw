// 문제에 추가 조건을 달자!
// => 공란은 단일문자라고 취급하지 않을 예정

// 테스트 입력은 string으로 받을 예정
// 테스트 예상 결과는 Array에 정답이 될 수 있는 모든 단일문자를 담아서 반환함
// 만약, 공백을 제외한 문자열의 길이가 0이라면 [] 을 반환함

export const findMostFrequentChar: (str: string) => Array<string> = (
  str: string
) => {
  const radix = new Map(); // 각각의 단일 문자 개수 세는 map
  const arr = str.replace(/\s/gi, '').split(''); // 공백 제거
  if (arr.length == 0) return []; // 공백을 제외한 문자열의 길이가 0일 때는 [] 을 반환

  // 열심히 세는 중
  arr.forEach((c) => {
    if (!radix.get(c)) radix.set(c, 0);
    radix.set(c, radix.get(c) + 1);
  });

  // 최대값 찾기
  let _max = -1;
  radix.forEach((v) => {
    if (_max < v) _max = v;
  });

  // 최대값이 같은 애들만 radix에서 후보를 고르고, 그 key 값만 정답으로 취함
  // 이렇게 하면 시간복잡도는 O(str.length), 공간복잡도 역시 O(str.length) 가 됨!
  return [...radix].filter((e) => e[1] == _max).map((e) => e[0]);
};
