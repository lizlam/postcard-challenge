<script>
  export let dayNumber = "1";
  export let dayImg = "day1.jpg";

  const handleClick = num => {
    let key = "PCCday".concat(num);
    localStorage.setItem(key, true);
  };
</script>

<style>
  .container {
    position: relative;
    perspective: 700;
    width: 650px;
    height: 450px;
    background-color: #ccc;
    color: white;
    font-size: 14em;
    font-family: fantasy;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  .card {
    position: absolute;
    text-align: center;
    line-height: 2.1em;
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

  .front:hover {
    box-shadow: rgb(0, 0, 0, 0.8) 0 0 10px;
  }

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    color: #333;
    border-radius: 15px;
    transform: rotateY(180deg);
    text-align: center;
    box-shadow: rgb(0, 0, 0, 0.8) 0 0 10px;
  }

  input {
    display: none;
  }

  @media (max-width: 600px) {
    .container {
      width: 325px;
      height: 225px;
      font-size: 7em;
    }
  }
</style>

<div class="container" on:click={handleClick({ dayNumber })}>
  <label>
    <input type="checkbox" />
    <div class="card">
      <div class="front">Day {dayNumber}</div>
      <div class="back bg-gray-100">
        <img alt="alt tag" class="p-4" src={dayImg} />
      </div>
    </div>
  </label>
</div>
