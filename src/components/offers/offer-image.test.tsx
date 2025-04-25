import { render, screen } from '@testing-library/react';
import { fakeImages } from '../../mock';
import OfferImage from './offer-image';

describe('Component: OfferImage', () => {
  it('should render correct', () => {
    const expectedImage = fakeImages[0];
    const offerImageContainerTestId = 'offer-image-container';

    render(<OfferImage image={expectedImage}/>);
    const offerImageContainer = screen.getByTestId(offerImageContainerTestId);

    expect(offerImageContainer).toBeInTheDocument();
  });
});
