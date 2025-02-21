/// 단위 테스트 : react hook 단위 테스트

import { act, renderHook } from '@testing-library/react';
import {
  FREQUENCY_ERROR_TEXT,
  useValidateFrequency,
} from '../../hooks/use-validate-frequency';

describe(`useValidateFrequency는 검색할 내용이 없으면 에러텍스트를 반환하고, 검색할 내용이 있으면 빈 문자열을 반환한다.`, () => {
  it('검색할 내용이 존재하는 경우 에러 텍스트를 반환하지 않는다.', () => {
    // GWT
    // Given
    const exampleSearchString = 'TDD 구현하는 법';
    const expectedResult = {
      frequencyErrorText: '',
      validateFrequency: () => null,
    };

    // When
    const { result } = renderHook(useValidateFrequency);
    act(() => {
      result.current.validateFrequency(exampleSearchString);
    });
    // Then
    expect(result.current.frequencyErrorText).toEqual(
      expectedResult.frequencyErrorText
    );
  });

  it('검색할 내용이 존재하지 않는 경우 에러텍스트를 반환한다.', () => {
    // GWT
    // Given
    const exampleSearchString = '';
    const expectedResult = {
      frequencyErrorText: FREQUENCY_ERROR_TEXT,
      validateFrequency: () => null,
    };

    // When
    const { result } = renderHook(useValidateFrequency);
    act(() => {
      result.current.validateFrequency(exampleSearchString);
    });
    // Then
    expect(result.current.frequencyErrorText).toEqual(
      expectedResult.frequencyErrorText
    );
  });
});
