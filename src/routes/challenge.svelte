<script context="module">
  import { fade } from "svelte/transition";
</script>

<style>
  h1 {
    font-family: VacationsBrush;
    font-size: 19em;
    font-weight: 300;
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  p {
    margin: 0 auto;
  }

  h2,
  p,
  ul,
  li {
    font-family: fantasy;
  }

  ul {
    font-size: 3em;
  }
  .download-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 7px;
  }
  .download-card:hover {
    background-color: gray;
  }
</style>

<svelte:head>
  <title>Challenge</title>
</svelte:head>

<main in:fade>
  <h1 class="leading-none text-center px-3 mx-2">Challenge</h1>
  <p class="text-4xl">Take the Postcard Challenge!</p>
  <ul>
    <li class="text-2xl">
      1. Create the rules of a micro game based on the postcard sized drawing.
    </li>
    <li class="text-2xl">
      2. Share it on any social media platform (or if you hate social media,
      share with a friend).
    </li>
    <li class="text-2xl">
      3. If sharing on social media, hashtag
      <code>#postcardgamechallenge</code>
      .
    </li>
    <li class="text-2xl">4. Repeat until the the 7 day challenge is done.</li>
  </ul>
  <p class="text-4xl">
    Have fun and use your imagination. Feel free to use game pieces such has
    pawns, dice or cubes.
  </p>
  <p class="text-4xl">The sky's the limit.</p>

  <hr />
  <h2>Need a worksheet? Download them below.</h2>
  <ul class="download-card-container">
    <li
      class="download-card bg-gray-200 border-gray-500 rounded-sm w-auto
      text-center leading-snug">
      <a href="Postcard-Challenge-Day1.pdf">Day 1</a>
    </li>
    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day2.pdf">Day 2</a>
    </li>

    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day3.pdf">Day 3</a>
    </li>
    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day4.pdf">Day 4</a>
    </li>
    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day5.pdf">Day 5</a>
    </li>
    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day6.pdf">Day 6</a>
    </li>
    <li class="bg-gray-200 border-gray-500 rounded-sm w-auto text-center">
      <a href="Postcard-Challenge-Day7.pdf">Day 7</a>
    </li>
  </ul>
</main>
