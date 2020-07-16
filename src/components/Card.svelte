<script>
  export let dayNumber = "1";
  export let dayImg = "day1.jpg";
  const handleClick = () => {
    console.log("test");
  };
</script>

<style>
  .container {
    position: relative;
    perspective: 700;
    width: 650px;
    height: 350px;
    background-color: black;
    color: white;
    font-size: 15em;
    font-family: fantasy;
    padding: 30px;
    border-radius: 15px;
  }

  .card {
    position: absolute;
    text-align: center;
    line-height: 400px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  :checked + .card {
    transform: rotateY(180deg);
  }

  .front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffc728;
    color: #333;
    border-radius: 15px;
  }

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffc728;
    color: #333;
    border-radius: 15px;
    transform: rotateY(180deg);
  }

  input {
    display: none;
  }
</style>

<div class="container" on:click={handleClick}>
  <label>
    <input type="checkbox" />
    <div class="card">
      <div class="front">Day {dayNumber}</div>
      <div class="back">
        <img alt="alt tag" src={dayImg} />
      </div>
    </div>
  </label>
</div>
