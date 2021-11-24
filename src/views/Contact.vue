<template>
  <div class="contact-title" id="contact-title">
    <h1>Contact</h1>
    <br />
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Enter name"
      />

      <label for="email">Email</label>
      <br />
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter email"
      />

      <label for="message">Message</label>
      <textarea class="form-control" id="message" rows="3"></textarea>
      <button type="submit" class="btn btn-primary contact">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
  font-size: 2em;
  margin-top: 20px;
  font-family: "Helvetica", Sans-Serif;
  color: #1ffe;
  font-weight: bold;
  animation: none;
  display: none;
}
label {
  font-size: 1em;
  font-family: "Helvetica", Sans-Serif;
  color: #cf0;
  background-color: #000000;
  border-color: #cf0;
  padding: 7.7px;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 20vh;
  transform: translate(-250px);
}
.form-group {
  width: 60%;
  text-align: center;
  margin: 0 auto;
}
.form-control {
  width: 75%;
  border-radius: 10px;
  margin: 0 auto;
  font-family: consolas, monospace;
  font-size: 1em;
  margin-top: 5px;
  padding: 10px;
  border: 5px solid #0ff;
}
.contact {
  margin-top: 5vh;
  width: 20vh;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 16px;
  border: 3px solid #007fff;
  background-color: #0ff;
  transition: 0.3s ease all;
  cursor: pointer;
}
.contact:hover {
  color: #0ff;
  border: 3px solid #0ff;
  background-color: #007fff;
  transform: scale(1.25);
  transition: 0.3s ease all;
}
</style>
