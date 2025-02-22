import { Grid2, TextField } from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { FrequencyField } from './frequency-field';
import { SubmitButton } from './submit-button';
import { ChangeEventHandler, useRef } from 'react';
import { useValidateFrequency } from '../hooks/use-validate-frequency';
import { findMostFrequentChar } from '../utils/week2';

export const FrequencyForm = () => {
  const [testText, setTestText] = useState('');
  const [frequencyText, setFrequencyText] = useState('' as string | undefined);
  const frequencyValue = useRef<string>();
  const { validateFrequency } = useValidateFrequency();
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const frequencyString = target.value;
    validateFrequency(frequencyString);
    frequencyValue.current = frequencyString;
  };

  const handleSubmit: MouseEventHandler<Element> = () => {
    setFrequencyText(frequencyValue.current);
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
          onChange={(e) => {
            setTestText(e.target.value);
          }}
        />
      </Grid2>
      <Grid2 size={9}>
        <FrequencyField onChange={handleChange} />
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
