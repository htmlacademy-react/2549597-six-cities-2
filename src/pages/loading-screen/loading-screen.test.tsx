import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';
import { TestIdMarkups } from '../../test/testid-markup';

describe('Component: LoadingScreen', () => {
  it('should render LoadingScreen', () => {
    render(<LoadingScreen />);
    const loadingScreenContainer = screen.getByTestId(TestIdMarkups.LoadingTestId);

    expect(loadingScreenContainer).toBeInTheDocument();
  });
});
