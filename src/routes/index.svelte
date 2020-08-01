<script>
  import { fade } from "svelte/transition";
  import Form from "../components/Form.svelte";
  import Card from "../components/Card.svelte";
  import typeWriter from "../lib/typewriter.js";
</script>

<style>
  @font-face {
    font-family: "VacationsBrush";
    src: url("https://postcard-challenge-git-tailwind.lizlam.vercel.app/VacationsBrush.woff")
      format("woff");
  }
  h1,
  p {
    text-align: center;
    font-family: fantasy;
    margin-bottom: 3rem;
  }

  h1 {
    font-family: VacationsBrush;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 15em;
    font-weight: 300;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;
    margin-top: 4rem;
    margin-left: 4rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 5em;
    }

    .container {
      margin-left: 0;
      grid-gap: 2em;
    }
  }
</style>

<svelte:head>
  <title>Postcard | Challenge</title>
</svelte:head>

<main in:fade>
  <h1 class="leading-none px-3 mx-2 sm:text-lg">Postcard Challenge</h1>
  <p use:typeWriter class="text-4xl m">
    Create 7 postcard sized games in 7 days.
  </p>
  <div class="container">
    <Card dayNumber="1" dayImg="day1.jpg" />
    <Card dayNumber="2" dayImg="day2.jpg" />
    <Card dayNumber="3" dayImg="day3.jpg" />
    <Card dayNumber="4" dayImg="day4.jpg" />
    <Card dayNumber="5" dayImg="day5.jpg" />
    <Card dayNumber="6" dayImg="day6.jpg" />
    <Card dayNumber="7" dayImg="day7.jpg" />
  </div>
</main>
