/// 통합 테스트

/**
 * @userStory
 * 유저는 검색창에 검색할 내용을 입력할 수 있다.
 *
 * * 1) 유저가 무언가 입력하면 에러텍스트는 노출되지 않는다.
 * * 2) 유저가 아무것도 입력하지 않고 검색하면 에러텍스트가 노출된다.
 */

import { Mock, vi } from 'vitest';
import { SearchField } from '../../components/search-field';
import {
  SEARCH_ERROR_TEXT,
  useValidateSearch,
} from '../../hooks/use-validate-search';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

vi.mock('../../hooks/use-validate-search', async (importOriginal) => {
  const mod = await importOriginal<
    typeof import('../../hooks/use-validate-search')
  >();
  return { ...mod, useValidateSearch: vi.fn() };
});

const _useValidateSearch = useValidateSearch as Mock;

describe('Search Field', () => {
  // User Story 1번
  it('유저가 무언가 입력하면 에러텍스트는 노출되지 않는다.', () => {
    // Given
    const searchString = 'TDD 깔쌈하게 잘 구현하는 법';
    _useValidateSearch.mockReturnValue({
      searchErrorText: '',
      validateSearch: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<SearchField />);
    const searchStringInput = getByTestId('search');
    fireEvent.change(searchStringInput, { target: { value: searchString } });

    // Then
    expect(queryByText(SEARCH_ERROR_TEXT)).not.toBeInTheDocument();
  });

  // User Story 2번
  it('유저가 무언가 입력하지 않으면 에러텍스트가 노출된다.', () => {
    // Given
    const searchString = '';
    _useValidateSearch.mockReturnValue({
      searchErrorText: SEARCH_ERROR_TEXT,
      validateSearch: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<SearchField />);
    const searchStringInput = getByTestId('search');
    fireEvent.change(searchStringInput, { target: { value: searchString } });

    // Then
    expect(queryByText(SEARCH_ERROR_TEXT)).toBeInTheDocument();
  });
});
