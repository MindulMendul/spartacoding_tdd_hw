import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { SEARCH_ERROR_TEXT } from '../hooks/use-validate-search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SignUpForm',
  render: () => {
    return (
      <App/>
    );
  },
  component: App,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _SignUpForm: Story = {
  args: {
    errorText: {
      errorEmailText: SEARCH_ERROR_TEXT,
    },
    onSubmit: () => null,
    initFormState: () => null,
  },
};