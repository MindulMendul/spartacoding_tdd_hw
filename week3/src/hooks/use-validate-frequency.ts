/// 단위 테스트 : react hook 단위 테스트

import { useState } from 'react';
import { validateFrequency } from '../utils/validate-frequency';

export const FREQUENCY_ERROR_TEXT = '오답은 쉽고, 예측은 어려워...';
export const useValidateFrequency = () => {
  const [frequencyErrorText, setFruquencyErrorText] = useState('');
  const handleValidateFrequency = (
    frequencyString: string,
    expectedString: string
  ) => {
    const { isValid } = validateFrequency(frequencyString, expectedString);
    if (isValid) {
      setFruquencyErrorText('');
    } else {
      setFruquencyErrorText(FREQUENCY_ERROR_TEXT);
    }
  };

  return {
    frequencyErrorText: frequencyErrorText,
    validateFrequency: handleValidateFrequency,
  };
};
