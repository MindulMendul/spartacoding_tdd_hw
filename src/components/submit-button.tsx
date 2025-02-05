export const SubmitButton = ({ onSubmit }: any) => {
  return (
    <>
      <button data-testid="submit-button" onClick={onSubmit}>
        검색
      </button>
    </>
  );
};
