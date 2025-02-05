/// 단위 테스트 : react hook 단위 테스트

import { act, renderHook } from '@testing-library/react';
import {
  SEARCH_ERROR_TEXT,
  useValidateSearch,
} from '../../../hooks/use-validate-search';

describe('useValidateSearch는 검색할 내용이 있어야 true를 반환한다.', () => {
  it('검색할 내용이 존재하는 경우 에러 텍스트를 반환하지 않는다.', () => {
    // GWT
    // Given
    const exampleSearchString = 'TDD 구현하는 법';
    const expectedResult = {
      searchErrorText: '',
      validateSearch: () => null,
    };

    // When
    const { result } = renderHook(useValidateSearch);
    act(() => {
      result.current.validateSearch(exampleSearchString);
    });
    // Then
    expect(result.current.searchErrorText).toEqual(
      expectedResult.searchErrorText
    );
  });

  it('검색할 내용이 존재하지 않는 경우 에러텍스트를 반환한다.', () => {
    // GWT
    // Given
    const exampleSearchString = '';
    const expectedResult = {
      searchErrorText: SEARCH_ERROR_TEXT,
      validateSearch: () => null,
    };

    // When
    const { result } = renderHook(useValidateSearch);
    act(() => {
      result.current.validateSearch(exampleSearchString);
    });
    // Then
    expect(result.current.searchErrorText).toEqual(
      expectedResult.searchErrorText
    );
  });
});
