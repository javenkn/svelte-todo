<script>
  export let todo;
  export let index;
  export let handleEdit;
  export let submit;
  export let deleteTodo;
</script>

<style>
  li {
    display: flex;
    align-items: center;
    padding: 15px;
    margin: auto;
    font-size: 1.5rem;
    border-bottom: 1px solid #d0c3c3;
  }

  li > label {
    margin-right: 20px;
  }

  li > button {
    margin: 0;
    margin-left: auto;
  }

  li > input {
    width: 100%;
    margin: 0;
    border: 0;
  }

  input[type="checkbox"] {
    display: none;
  }

  button {
    border: 0;
    background: none;
  }

  .done {
    text-decoration: line-through;
  }
</style>

<li>
  <label>
    <input
      data-testid="todo-checkbox"
      type="checkbox"
      bind:checked={todo.done} />
    {todo.done ? '✅' : '⭕️'}
  </label>
  <input
    class:done={todo.done}
    type="text"
    value={todo.text}
    placeholder="What needs to be done?"
    on:keydown={handleEdit}
    on:blur={e => submit(e, index)}
    data-testid="todo-text" />
  <button on:click={() => deleteTodo(todo.id)}>🗑</button>
</li>
