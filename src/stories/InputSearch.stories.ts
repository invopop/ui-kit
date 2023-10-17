import type { Meta, StoryObj } from '@storybook/svelte'

import InputSearch from '../lib/InputSearch.svelte'
import MarginDecorator from './decorartors/MarginDecorator.svelte'
import MaxWidthSmDecorator from './decorartors/MaxWidthSmDecorator.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  decorators: [() => MarginDecorator, () => MaxWidthSmDecorator]
} satisfies Meta<InputSearch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const WithoutShortcut: Story = {
  args: {
    placeholder: 'Search'
  }
}

export const WithShortcut: Story = {
  args: {
    placeholder: 'Search',
    shortcut: 'K'
  }
}

export const WithLongShortcut: Story = {
  args: {
    placeholder: 'Search',
    shortcut: '⌘K'
  }
}
