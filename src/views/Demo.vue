<template>
  <div class="container">
    <h1>Welcome to the NLP Sentiment analysis demo!</h1>
    <div class="row">
      <div class="col">
        <h2 class="text">Upload your dataset</h2>
        <h3 class="text">Remember the following:</h3>
        <h4 class="text">
          Your dataset must be in one of the following formats:
        </h4>
        <ul>
          <li class="ffile">*.CSV</li>
          <li class="ffile">*.XLS</li>
          <li class="ffile">*.XLSX</li>
        </ul>
      </div>
      <div class="col">
        <Upload />
      </div>
    </div>
  </div>
</template>

<script>
import Upload from "../components/Upload.vue";
export default {
  name: "Demo",
  components: {
    Upload,
  },
};
</script>
<style>
h1 {
  color: #1ffe;
  font-size: 32px;
  text-align: center;
  padding-top: 20px;
  width: 100%;
  overflow: hidden;
  border-right: 0.2rem solid #555;
  white-space: nowrap;
  margin: 0 auto;
  font-family: consolas, monospace;
  font-weight: bold;
  font-style: italic;
  animation: typed 4s steps(36, end), blink-caret 0.5s;
}
@keyframes typed {
  from {
    width: 0;
  }
  to {
    width: 43ch;
  }
}
.text {
  margin-top: 3.1416rem;
  font-size: 24px;
  font-family: Source Sans Pro, sans-serif;
  font-weight: bold;
  color: aqua;
}
.text:hover {
  color: #fff;
}
.ffile {
  font-size: 1em;
  font-family: "Helvetica", Sans-Serif;
  color: #cf0;
  background-color: #000000;
  border-color: #cf0;
  border-width: 5px;
  padding: 7.7px;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 20vh;
  list-style: none;
  display: inline block;
}
.ffile:hover {
  color: #3399bd;
  background-color: #cf0;
  border-color: #3399db;
}
</style>
