/// 단위 테스트 : pure function 단위 테스트

export const validateSearch = (searchString: string) => {
  return {
    isValid: searchString.length > 0,
  };
};
