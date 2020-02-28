import { render } from '@testing-library/svelte';
import Filter from '../components/Filter.svelte';

test('filter properly renders', () => {
  render(Filter);
});
