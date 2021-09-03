import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Sign In/);
  expect(linkElement[0]).toBeInTheDocument();
});
