import { withStore } from '../../mock-component';
import { OfferScreenHOC } from './offer-screen-hoc';
import { render, screen } from '@testing-library/react';

describe('Pages: OfferScreenHOC', () => {
  it('', () => {
    const expectedText = 'WrappedComponent';
    const mockComponent = () => <span>{expectedText}</span>;
    const { withStoreComponent } = withStore(mockComponent(), {});
    const PreparedComponent = OfferScreenHOC(withStoreComponent);

    render(<PreparedComponent />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
