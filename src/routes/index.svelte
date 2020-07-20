<script>
  import Form from "../components/Form.svelte";
  import Card from "../components/Card.svelte";
</script>

<style>
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
    font-family: fantasy;
  }

  h1 {
    font-family: VacationsBrush;
    text-transform: uppercase;
    font-size: 15em;
    font-weight: 700;
  }
</style>

<svelte:head>
  <title>Postcard | Challenge</title>
</svelte:head>

<h1 class="leading-none">Postcard Challenge</h1>
<p class="text-4xl">Create 7 postcard sized games in 7 days.</p>
<Card dayNumber="1" dayImg="day1.jpg" />
<Card dayNumber="2" dayImg="day2.jpg" />
<Card dayNumber="3" dayImg="day3.jpg" />
<Card dayNumber="4" dayImg="day4.jpg" />
<Card dayNumber="5" dayImg="day5.jpg" />
<Card dayNumber="6" dayImg="day6.jpg" />
<Card dayNumber="7" dayImg="day7.jpg" />
