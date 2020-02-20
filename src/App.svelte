<script>
  import TodoList from "./components/TodoList.svelte";
  export let name;
</script>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    padding: 25px;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    box-shadow: 10px 10px 15px #d0c3c3;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 2rem;
  }

  :global(ul) {
    list-style: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: 60%;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <TodoList />
</main>
