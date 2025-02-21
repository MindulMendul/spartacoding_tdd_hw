/// 단위 테스트 : react hook 단위 테스트

import { useState } from 'react';
import { validateFrequency } from '../utils/validate-frequency';

export const FREQUENCY_ERROR_TEXT =
  '그래도 무언가 적어주셔야 테스트기도 보람이 있을 거에요... ㅠㅠ';
export const useValidateFrequency = () => {
  const [frequencyErrorText, setFruquencyErrorText] = useState('');
  const handleValidateFrequency = (frequencyString: string) => {
    const { isValid } = validateFrequency(frequencyString);
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
