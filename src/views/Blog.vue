<template>
  <div class="div">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      msg: this.getMsg(),
    };
  },
  methods: {
    getMsg() {
      const url = "http://localhost:5000/";
      axios
        .get(url)
        .then((res) => {
          this.msg = res.data.msg;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  create() {
    this.getMsg();
  },
};
</script>
