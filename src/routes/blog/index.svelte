<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Challenge</title>
</svelte:head>

<h1>Take the Postcard Game Challenge</h1>
<ul>
  <li>Create a micro game based on the postcard sized drawing.</li>
  <li>
    Share it on any social media platform (or if you hate social media, share
    with a friend).
  </li>
  <li>
    If sharing on social media, hashtag
    <code>#postcardgamechallenge</code>
    .
  </li>
  <li>Repeat until the the 7 day challenge is done.</li>
</ul>
<p>
  Have fun and use your imagination. Feel free to use game pieces such has
  pawns, dice, cubes, etc. The sky's the limit with accessories but only use the
  postcard as the board.
</p>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
