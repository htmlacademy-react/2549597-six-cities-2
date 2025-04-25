import { render, screen } from '@testing-library/react';
import { fakeGoods } from '../../mock';
import OfferOptionList from './offer-option-list';

describe('Component: OfferOptionList', () => {
  it('should render correct', () => {
    const expectedOptions = fakeGoods;
    const offerOptionListContainerTestId = 'option-list-container';

    render(<OfferOptionList goods={expectedOptions}/>);
    const offerOptionListContainer = screen.getByTestId(offerOptionListContainerTestId);

    expect(offerOptionListContainer).toBeInTheDocument();
  });
});
