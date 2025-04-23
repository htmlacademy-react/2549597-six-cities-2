import { describe, it, expect } from 'vitest';
import { OfferScreenHOC } from './offer-screen-hoc';
import { render, screen } from '@testing-library/react';

describe('Pages: OfferScreenHOC', () => {
  it('', () => {
    const expectedText = 'WrappedComponent';
    const mockComponent = () => <span>{expectedText}</span>;
    const PreparedComponent = OfferScreenHOC(mockComponent);

    render(<PreparedComponent />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
})
