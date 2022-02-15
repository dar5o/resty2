import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from '../src/components/results/index';

describe('testing of results', () => {
  it('should render results data', () => {
    const dataTest = {text: 'text'};
    render(<Results data={dataTest}/>);
    const displayText= screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataTest.text);
  });
}); 