/// 단위 테스트 : pure function 단위 테스트

export const validateFrequency = (
  frequencyString: string,
  expectedString: string
) => {
  return {
    isValid: frequencyString == expectedString,
  };
};
