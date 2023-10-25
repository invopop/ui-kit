import type { Meta, StoryObj } from '@storybook/svelte'

import ButtonFile from '../lib/ButtonFile.svelte'
import MarginDecorator from './decorartors/MarginDecorator.svelte'
import MaxWidthSmDecorator from './decorartors/MaxWidthSmDecorator.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Components/ButtonFile',
  component: ButtonFile,
  tags: ['autodocs'],
  decorators: [() => MarginDecorator, () => MaxWidthSmDecorator]
} satisfies Meta<ButtonFile>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Default: Story = {
  args: {
    type: 'pdf',
    name: 'File name'
  }
}

export const FullWidth: Story = {
  args: {
    type: 'pdf',
    name: 'File name',
    fullwidth: true
  }
}

export const Disabled: Story = {
  args: {
    type: 'pdf',
    name: 'File name',
    disabled: true
  }
}
