import { render, screen } from '@testing-library/react';
import { fakeGoods } from '../../test/mock';
import OfferOptionList from './offer-option-list';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: OfferOptionList', () => {
  it('should render OfferOptionList', () => {
    const expectedOptions = fakeGoods;

    render(<OfferOptionList goods={expectedOptions}/>);
    const offerOptionListContainer = screen.getByTestId(TestIdMarkups.OptionListTestId);

    expect(offerOptionListContainer).toBeInTheDocument();
  });
});
