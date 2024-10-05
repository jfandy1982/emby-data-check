import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'ClientHeaderFundamentalsComponent',
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/client-header-fundamentals works!/gi)).toBeTruthy();
  },
};
