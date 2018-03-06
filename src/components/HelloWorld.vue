<template>
  <div class="hello">
    <h1>Playground</h1>
    <div>
      <p>Test Axios post method via proxy</p>
      <input v-model="filaname" type="text" name="filename" placeholder="strange.py">
      <input v-model="something" type="text" name="something" placeholder="maybe python?">
      <button @click="makeGist">Test POST</button>
    </div>
    <div>
      <p>Test Axios get method via proxy</p>
      <input v-model="gistId" type="text" name="gist_id" placeholder="gist id">
      <button @click="readGist">Test GET</button>
    </div>
    <div>
      <pre>
        <code>
          {{responseData}}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    email: "",
    password: "",
    filaname: "",
    gistId: "ce5cb5b5297b5dd0347d7650ada9971b",
    something: +new Date(),
    responseData: "No response!"
  }),

  methods: {
    makeGist() {
      axios({
        method: "POST",
        url: "/gists",
        data: {
          description: "POST /gists test",
          public: true,
          files: {
            [this.filename]: {
              content: `created for testing vue-cli errors at ${this.something}`
            }
          }
        }
      })
        .then(response => {
          this.responseData = response.data;
        })
        .catch(err => {
          this.responseData = `Error: ${err.message}`;
        });
    },

    readGist() {
      axios
        .get(`/gists/${this.gistId}`)
        .then(response => {
          this.responseData = response.data;
        })
        .catch(err => {
          this.responseData = `Error: ${
            err.message
          } (see console logs for details)`;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
code {
  display: block;
  width: 100%;
}
</style>
