import { MouseEventHandler } from 'react';
import { SearchField } from './search-field';
import { SubmitButton } from './submit-button';

export const SearchForm = ({
  onSubmit,
}: {
  onSubmit: MouseEventHandler<Element>;
}) => {
  return (
    <>
      <SearchField />
      <SubmitButton dataTestid="submit-button" onSubmit={onSubmit}>
        검색
      </SubmitButton>
    </>
  );
};
