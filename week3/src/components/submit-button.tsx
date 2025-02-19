import { MouseEventHandler, ReactNode } from 'react';

export const SubmitButton = ({
  children,
  dataTestid,
  onSubmit,
}: {
  children: ReactNode;
  dataTestid: string;
  onSubmit: MouseEventHandler<Element>;
}) => {
  return (
    <>
      <button data-testid={dataTestid} onClick={onSubmit}>
        {children}
      </button>
    </>
  );
};
