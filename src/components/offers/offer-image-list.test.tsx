import { render, screen } from '@testing-library/react';
import { fakeImages } from '../../test/mock';
import OfferImageList from './offer-image-list';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: OfferImageList', () => {
  it('should render OfferImageList', () => {
    const expectedImages = fakeImages;

    render(<OfferImageList images={expectedImages}/>);
    const offerImageListContainer = screen.getByTestId(TestIdMarkups.OfferImageListTestId);

    expect(offerImageListContainer).toBeInTheDocument();
  });
});
