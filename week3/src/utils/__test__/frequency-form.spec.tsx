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
import { FrequencyForm } from '../../components/frequency-form';

vi.mock('../../hooks/use-validate-frequency', async (importOriginal) => {
  const mod = await importOriginal<
    typeof import('../../hooks/use-validate-frequency')
  >();
  return { ...mod, useValidateFrequency: vi.fn() };
});

const _useValidateFrequency = useValidateFrequency as Mock;

describe('1, 2주차 내용을 바탕으로 제작한 3주 차 통합테스트', () => {
  // User Story 1번
  it('유저가 예측값을 입력했을 때 예측값이 결과값과 같다면, 에러 메시지를 보여주지 않는다.', () => {
    // Given
    const frequencyString = 'ㅁㅁㅁㅁrasdfgzozxx';
    const frequencyExpectedString = 'ㅁ';
    _useValidateFrequency.mockReturnValue({
      frequencyErrorText: '',
      validateFrequency: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<FrequencyForm />);

    const frequencyStringInput = getByTestId('frequency');
    fireEvent.change(frequencyStringInput, {
      target: { value: frequencyString },
    });

    const frequencyExpectedStringInput = getByTestId('frequency-expected');
    fireEvent.change(frequencyExpectedStringInput, {
      target: { value: frequencyExpectedString },
    });

    // Then
    expect(queryByText(FREQUENCY_ERROR_TEXT)).not.toBeInTheDocument();
  });

  // User Story 2번
  it('유저가 예측값을 입력했을 때 예측값이 결과값과 다르다면, 예측값이 틀렸다고 에러 메시지를 보여준다.', () => {
    // Given
    const frequencyString = 'ㅁㅁㅁㅁrasdfgzozxx';
    const frequencyExpectedString = 'ㅁㄱ';
    _useValidateFrequency.mockReturnValue({
      frequencyErrorText: FREQUENCY_ERROR_TEXT,
      validateFrequency: () => null,
    });

    // When
    const { getByTestId, queryByText } = render(<FrequencyForm />);

    const frequencyStringInput = getByTestId('frequency');
    fireEvent.change(frequencyStringInput, {
      target: { value: frequencyString },
    });

    const frequencyExpectedStringInput = getByTestId('frequency-expected');
    fireEvent.change(frequencyExpectedStringInput, {
      target: { value: frequencyExpectedString },
    });

    // Then
    expect(queryByText(FREQUENCY_ERROR_TEXT)).toBeInTheDocument();
  });
});
