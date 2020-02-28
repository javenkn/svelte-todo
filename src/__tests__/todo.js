import { render, fireEvent } from '@testing-library/svelte';
import Todo from '../components/Todo.svelte';

const handleEdit = jest.fn();
const submit = jest.fn();
const deleteTodo = jest.fn();

test('can toggle a todo', async () => {
  const fakeTodo = { id: 1, done: false, text: 'Learn Svelte' };
  const { getByTestId } = render(Todo, {
    todo: fakeTodo,
    index: 0,
    handleEdit,
    submit,
    deleteTodo,
  });
  const checkbox = getByTestId('todo-checkbox');

  expect(checkbox).not.toBeChecked();
  await fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
