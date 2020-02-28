import { render, fireEvent } from '@testing-library/svelte';
import App from '../App.svelte';

test('renders the application', () => {
  const { getByText } = render(App, { name: 'World' });
  getByText(/hello world/i);
});
