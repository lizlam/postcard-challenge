<script>
  import { fade } from "svelte/transition";
</script>

<style>
  h1 {
    font-family: VacationsBrush;
    font-size: 19em;
    font-weight: 300;
  }
  p {
    font-family: fantasy;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<main in:fade>
  <h1 class="text-center">About</h1>
  <p class="text-4xl">
    This is a challenge for aspiring boardgame designers to get their creative
    juices flowing.
  </p>
</main>
