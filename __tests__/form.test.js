import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../src/components/form/index.js';

describe('testing of the form', () => {
  it('should use a callback on submit', () => {
    const callback = jest.fn();
    render(<Form onSubmit={callback}/>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
}); 