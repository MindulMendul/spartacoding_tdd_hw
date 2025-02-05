import { SearchField } from './search-field';
import { SubmitButton } from './submit-button';

export const SearchForm = ({ onSubmit }: any) => {
  return (
    <>
      <SearchField />
      <SubmitButton data-testid="submit-button" onClick={onSubmit}>
        검색
      </SubmitButton>
    </>
  );
};
