import { MouseEventHandler, ReactNode } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const SubmitButton = ({
  children,
  dataTestid,
  onSubmit,
}: {
  children: ReactNode;
  dataTestid: string;
  onSubmit?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<SendIcon />}
      data-testid={dataTestid}
      onClick={onSubmit}
      sx={{ width: 1, height: 1 }}
    >
      {children}
    </Button>
  );
};
