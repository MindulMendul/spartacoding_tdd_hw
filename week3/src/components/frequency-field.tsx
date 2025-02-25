import { TextField } from '@mui/material';

export const FrequencyField = ({
  frequencyErrorText,
  onChange,
}: {
  frequencyErrorText: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) => {
  return (
    <TextField
      id="frequency-expected"
      inputProps={{
        'data-testid': 'frequency-expected',
      }}
      label="2주차 함수 테스트기"
      placeholder="입력 후 결과를 아래에 확인하세요!"
      fullWidth
      // error props
      error={Boolean(frequencyErrorText)}
      helperText={frequencyErrorText}
      //
      onChange={onChange}
    />
  );
};
