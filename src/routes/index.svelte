<script>
  import Form from "../components/Form.svelte";
  import Card from "../components/Card.svelte";
</script>

<style>
  @import "font.css";
  @font-face {
    font-family: "VacationsBrush";
    src: url("https://postcard-challenge-git-tailwind.lizlam.vercel.app/VacationsBrush.woff")
      format("woff");
  }
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-family: VacationsBrush;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    font-size: 2em;
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Postcard | Challenge</title>
</svelte:head>

<h1>Postcard Challenge</h1>
<p>Create 7 postcard sized games in 7 days.</p>
<Card dayNumber="1" dayImg="day1.jpg" />
<Card dayNumber="2" dayImg="day2.jpg" />
<Card dayNumber="3" dayImg="day3.jpg" />
<Card dayNumber="4" dayImg="day4.jpg" />
<Card dayNumber="5" dayImg="day5.jpg" />
<Card dayNumber="6" dayImg="day6.jpg" />
<Card dayNumber="7" dayImg="day7.jpg" />
