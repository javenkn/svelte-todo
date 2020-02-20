<script>
  import Todo from "./Todo.svelte";
  import Filter from "./Filter.svelte";

  const ENTER_KEY = 13;
  let filter = "all";
  let newTodo = "";
  let todos = [];

  const updateView = () => {
    filter = "all";
    if (window.location.hash === "#/active") {
      filter = "active";
    } else if (window.location.hash === "#/completed") {
      filter = "completed";
    }
  };

  window.addEventListener("hashchange", updateView);
  updateView();

  function addTodo() {
    newTodo = newTodo.trim();

    if (newTodo === "") return;
    const todo = {
      id: Date.now(),
      text: newTodo,
      done: false
    };
    todos = [...todos, todo];
    newTodo = "";
  }

  function handleEdit(event) {
    if (event.which === ENTER_KEY) {
      event.target.blur();
    }
  }

  function submit(event, index) {
    todos[index].text = event.target.value;
  }

  function deleteTodo(id) {
    todos = todos.filter(td => td.id !== id);
  }

  $: filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter(td => !td.done)
      : todos.filter(td => td.done);
</script>

<style>
  ul {
    padding: 0 20px 10px 0;
    width: 100%;
    max-height: 450px;
    overflow-y: auto;
  }
  input {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
  }
</style>

<form on:submit|preventDefault={addTodo}>
  <input bind:value={newTodo} placeholder="What needs to be done?" />
</form>
<ul>
  {#each filteredTodos as td, index (td.id)}
    <Todo todo={td} {index} {handleEdit} {deleteTodo} {submit} />
  {/each}
</ul>
<Filter {filter} />
