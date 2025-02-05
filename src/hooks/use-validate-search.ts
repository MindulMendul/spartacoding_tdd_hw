/// 단위 테스트 : react hook 단위 테스트

import { useState } from 'react';
import { validateSearch } from '../utils/validate-search';

export const SEARCH_ERROR_TEXT = '검색할 내용을 입력해주세요!';
export const useValidateSearch = () => {
  const [searchErrorText, setSearchErrorText] = useState('');
  const handleValidateSearch = (searchString: string) => {
    const { isValid } = validateSearch(searchString);
    if (!isValid) {
      setSearchErrorText(SEARCH_ERROR_TEXT);
    }
  };

  return {
    searchErrorText: searchErrorText,
    validateSearch: handleValidateSearch,
  };
};
