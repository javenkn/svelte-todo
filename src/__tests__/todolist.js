import { render, fireEvent, getByText } from '@testing-library/svelte';
import TodoList from '../components/TodoList.svelte';
import Todo from '../components/Todo.svelte';

test('todo list renders nothing', () => {
  const { getByTestId } = render(TodoList);
  expect(getByTestId('todo-list').hasChildNodes()).toBeFalsy();
});

test('todo list renders todos', () => {
  const fakeTodos = [
    { id: 1, done: false, text: 'Learn Svelte' },
    { id: 2, done: true, text: 'Learn Svelte testing' },
  ];
  const { getAllByTestId } = render(TodoList, { todos: fakeTodos });
  const todos = getAllByTestId('todo-text').map(td => td.value);
  expect(todos).toMatchInlineSnapshot(`
    Array [
      "Learn Svelte",
      "Learn Svelte testing",
    ]
  `);
});

test('can add a new todo', async () => {
  const { getByTestId, getByPlaceholderText, getByDisplayValue } = render(
    TodoList
  );
  const input = getByPlaceholderText(/what needs to be done/i);
  const list = getByTestId('todo-list');
  await fireEvent.input(input, { target: { value: 'Learn Svelte' } });
  await fireEvent.submit(getByTestId('todo-form'));

  expect(list.children).toHaveLength(1);
  getByDisplayValue(/learn svelte/i);
});

test('can remove a new todo', async () => {
  const fakeTodos = [
    { id: 1, done: false, text: 'Learn Svelte' },
    { id: 2, done: true, text: 'Learn Svelte testing' },
  ];
  const { getByTestId, getAllByText } = render(TodoList, { todos: fakeTodos });
  const list = getByTestId('todo-list');
  const button = getAllByText('🗑')[0];

  expect(list.children).toHaveLength(2);

  await fireEvent.click(button);

  expect(list.children).toHaveLength(1);
});
