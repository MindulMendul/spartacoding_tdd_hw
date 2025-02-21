/// 통합 테스트

/**
 * @userStory
 * 유저는 2주 차 함수를 테스트할 수 있는 테스트기를 손에 넣게 된다.
 * 마침내, 유저는 이윽고 완전한 2주 차 TDD 마스터가 되기 위하여 기여고 3주 차 CI/CD 과제에까지 손을 대어보게 되는데...!!
 *
 * * 0) 유저는 테스트할 문장을 어떤 문장을 넣더라도 에러 메시지와는 관련이 없다.
 * * 1) 유저가 예측값을 입력했을 때 예측값이 결과값과 다르다면, 예측값이 틀렸다고 에러 메시지를 보여준다.
 * * 2) 유저가 예측값을 입력했을 때 예측값이 결과값과 같다면, 에러 메시지를 보여주지 않는다.
 */

import { Mock, vi } from 'vitest';
import {
  FREQUENCY_ERROR_TEXT,
  useValidateFrequency,
} from '../../hooks/use-validate-frequency';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchForm } from '../../components/search-form';

vi.mock('../../hooks/use-validate-frequency', async (importOriginal) => {
  const mod = await importOriginal<
    typeof import('../../hooks/use-validate-frequency')
  >();
  return { ...mod, useValidateFrequency: vi.fn() };
});

const _useValidateFrequency = useValidateFrequency as Mock;

describe('Search Form', () => {
  // User Story 1번
  it('유저가 검색할 데이터를 입력하고 검색을 시도하면 에러텍스트는 노출되지 않는다.', () => {
    // Given
    const searchString = 'TDD 깔쌈하게 잘 구현하는 법';
    _useValidateFrequency.mockReturnValue({
      searchErrorText: '',
      validateSearch: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<SearchForm />);
    const searchStringInput = getByTestId('search');
    fireEvent.change(searchStringInput, { target: { value: searchString } });

    // Then
    expect(queryByText(FREQUENCY_ERROR_TEXT)).not.toBeInTheDocument();
  });

  // User Story 2번
  it('유저가 검색할 데이터를 입력하지 않고 검색을 시도하면 에러텍스트가 노출된다.', () => {
    // Given
    const searchString = '';
    _useValidateFrequency.mockReturnValue({
      searchErrorText: FREQUENCY_ERROR_TEXT,
      validateSearch: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<SearchForm />);
    const searchStringInput = getByTestId('search');
    fireEvent.change(searchStringInput, { target: { value: searchString } });

    // Then
    expect(queryByText(FREQUENCY_ERROR_TEXT)).toBeInTheDocument();
  });
});
