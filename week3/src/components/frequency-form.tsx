import { Grid2, TextField } from '@mui/material';
import { useState } from 'react';
import { FrequencyField } from './frequency-field';
import { SubmitButton } from './submit-button';
import { ChangeEventHandler } from 'react';
import { useValidateFrequency } from '../hooks/use-validate-frequency';
import { findMostFrequentChar } from '../utils/week2';

export const FrequencyForm = () => {
  const [testText, setTestText] = useState('');
  const [frequencyText, setFrequencyText] = useState('');

  const { frequencyErrorText, validateFrequency } = useValidateFrequency();
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFrequencyText(e.target.value);
  };

  const handleSubmit = () => {
    validateFrequency(frequencyText, findMostFrequentChar(testText).join(''));
  };

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={12}>
        <TextField
          id="frequency"
          inputProps={{
            'data-testid': 'frequency',
          }}
          label="테스트할 문장"
          placeholder="테스트할 문장을 적어주세요"
          fullWidth
          value={testText}
          onChange={(e) => {
            setTestText(e.target.value);
          }}
        />
      </Grid2>
      <Grid2 size={9}>
        <FrequencyField
          onChange={handleChange}
          frequencyErrorText={frequencyErrorText}
        />
      </Grid2>
      <Grid2 size={3}>
        <SubmitButton dataTestid="submit-button" onSubmit={handleSubmit}>
          예측
        </SubmitButton>
      </Grid2>
    </Grid2>
  );
};
