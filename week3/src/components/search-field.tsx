import { TextField } from '@mui/material';
import { useValidateFrequency } from '../hooks/use-validate-frequency';

export const SearchField = ({ onChange }: { onChange: any }) => {
  const { frequencyErrorText } = useValidateFrequency();
  return (
    <TextField
      id="search"
      inputProps={{
        'data-testid': 'search',
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
