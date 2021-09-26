import { render, screen } from '@testing-library/react';

import HomePage from '../../pages';

test('renders "Welcome to Next.js!" text', () => {
  render(<HomePage />);

  screen.getByText('Welcome to Next.js!');
});
