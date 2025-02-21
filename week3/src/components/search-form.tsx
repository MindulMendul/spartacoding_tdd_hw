import { Grid2, TextField } from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { SearchField } from './search-field';
import { SubmitButton } from './submit-button';
import { ChangeEventHandler, useRef } from 'react';
import { useValidateFrequency } from '../hooks/use-validate-frequency';
import { findMostFrequentChar } from '../utils/week2';

export const SearchForm = () => {
  const [testText, setTestText] = useState('');
  const [searchText, setSearchText] = useState('' as string | undefined);
  const searchValue = useRef<string>();
  const { validateFrequency } = useValidateFrequency();
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const searchString = target.value;
    validateFrequency(searchString);
    searchValue.current = searchString;
  };

  const handleSubmit: MouseEventHandler<Element> = () => {
    setSearchText(searchValue.current);
  };

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={12}>
        <TextField
          id="search"
          inputProps={{
            'data-testid': 'search',
          }}
          label="테스트할 문장"
          placeholder="테스트할 문장을 적어주세요"
          fullWidth
          onChange={(e) => {
            setTestText(e.target.value);
          }}
        />
      </Grid2>
      <Grid2 size={9}>
        <SearchField onChange={handleChange} />
      </Grid2>
      <Grid2 size={3}>
        <SubmitButton dataTestid="submit-button" onSubmit={handleSubmit}>
          예측
        </SubmitButton>
      </Grid2>
      <Grid2 size={12}>
        <h3>실제 결과값</h3>
        <div>{findMostFrequentChar(testText)}</div>
      </Grid2>
    </Grid2>
  );
};
