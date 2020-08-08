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

  img {
    padding-left: 80px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 5em;
    }

    img {
      width: 400px;
      padding-left: 20px;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<main in:fade>
  <img alt="About" src="about.png" />
  <p class="text-4xl">
    This is a challenge for aspiring boardgame designers to get their creative
    juices flowing.
  </p>
  <br />
  <p class="text-4xl">
    The rules are just a guide to get you started.
    <br />
    <br />
    Don't like the postcards?
    <br />
    Feel free to draw your own!
    <br />
    <br />
    Want to use the challenge as a family activity? Great!
    <br />
    <br />
    Want to combine postcards? Go for it!
    <br />
    <br />
    Just have fun!
  </p>

</main>
