/// 단위 테스트 : pure function 단위 테스트

import { validateFrequency } from '../validate-frequency';

describe('validateFrequency는 검색할 내용이 있어야 true를 반환한다.', () => {
  it('검색할 내용이 존재하는 경우 isValid: true를 포함한 객체를 반환한다.', () => {
    // GWT
    // Given
    const exampleSearchString = 'TDD 구현하는 법';
    const expectedResult = {
      isValid: true,
    };

    // When
    const result = validateFrequency(exampleSearchString);

    // Then
    expect(result).toEqual(expectedResult);
  });

  it('검색할 내용이 존재하지 않는 경우 isValid: false를 포함한 객체를 반환한다.', () => {
    // GWT
    // Given
    const exampleSearchString = '';
    const expectedResult = {
      isValid: false,
    };

    // When
    const result = validateFrequency(exampleSearchString);

    // Then
    expect(result).toEqual(expectedResult);
  });
});
