/// 단위 테스트 : react hook 단위 테스트

import { act, renderHook } from '@testing-library/react';
import {
  FREQUENCY_ERROR_TEXT,
  useValidateFrequency,
} from '../../hooks/use-validate-frequency';
import { findMostFrequentChar } from '../week2';

describe(`2주차 내용을 바탕으로 만든 3주차 기능 테스트`, () => {
  it('유저가 예측값을 입력했을 때 예측값이 결과값과 같다면, 에러 메시지를 보여주지 않는다.', () => {
    // GWT
    // Given
    const frequencyString =
      '[KDC] 시니어로 가는 지름길, 프론트엔드 실무 스킬(TDD, CI/CD, 성능 최적화)';
    const frequencyExpectedString = 'D';
    const expectedResult = {
      frequencyErrorText: '',
    };

    // When
    const { result } = renderHook(useValidateFrequency);
    act(() => {
      result.current.validateFrequency(
        findMostFrequentChar(frequencyString).join(),
        frequencyExpectedString
      );
    });

    // Then
    expect(result.current.frequencyErrorText).toBe(
      expectedResult.frequencyErrorText
    );
  });

  it('유저가 예측값을 입력했을 때 예측값이 결과값과 다르다면, 예측값이 틀렸다고 에러 메시지를 보여준다.', () => {
    // GWT
    // Given
    const frequencyString = 'TDD 깔쌈하게 잘 구현하는 법';
    const frequencyExpectedString = 'asdf';
    const expectedResult = {
      frequencyErrorText: FREQUENCY_ERROR_TEXT,
    };

    // When
    const { result } = renderHook(useValidateFrequency);
    act(() => {
      result.current.validateFrequency(
        findMostFrequentChar(frequencyString).join(),
        frequencyExpectedString
      );
    });

    // Then
    expect(result.current.frequencyErrorText).toBe(
      expectedResult.frequencyErrorText
    );
  });
});
