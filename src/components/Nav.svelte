<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 400;
    font-size: 2em;
    padding: 0 1em;
    background-color: black;
    color: white;
    font-family: fantasy;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: right;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background: #ffc728;
    display: block;
    bottom: 30px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  @media (max-width: 600px) {
    nav {
      font-size: 1.5em;
    }
  }
</style>

<nav>
  <ul>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'challenge' ? 'page' : undefined}
        href="challenge">
        Challenge
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
  </ul>
</nav>
