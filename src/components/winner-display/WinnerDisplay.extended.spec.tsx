import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    const text = 'anything';

    render(<WinnerDisplay text={text} />);

    const component = screen.getByText(`${text} wins!`);

    expect(component).toBeInTheDocument();
  });
});
