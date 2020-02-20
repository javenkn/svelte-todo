<script>
  export let filter;
</script>

<style>
  footer {
    padding: 20px 20px 10px;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li > a {
    color: #000;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .selected {
    color: #ff3e00;
  }
</style>

<footer>
  <ul>
    <li>
      <a class={filter === 'all' ? 'selected' : ''} href="#/">All</a>
    </li>
    <li>
      <a class={filter === 'active' ? 'selected' : ''} href="#/active">
        Active
      </a>
    </li>
    <li>
      <a class={filter === 'completed' ? 'selected' : ''} href="#/completed">
        Completed
      </a>
    </li>
  </ul>
</footer>
