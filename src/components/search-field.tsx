import { TextField } from '@mui/material';
import { useRef } from 'react';
import { useValidateSearch } from '../hooks/use-validate-search';

export const SearchField = ({}: any) => {
  const searchValue = useRef<string>();
  const { searchErrorText, validateSearch } = useValidateSearch();
  return (
    <TextField
      id="search"
      inputProps={{
        'data-testid': 'search',
      }}
      label="검색창"
      placeholder="검색어를 입력해주세요"
      fullWidth
      // error props
      error={Boolean(searchErrorText)}
      helperText={searchErrorText}
      //
      onChange={({ target }) => {
        const searchString = target.value;
        validateSearch(searchString);
        searchValue.current = searchString;
      }}
    />
  );
};
