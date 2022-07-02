<template>
  <div class="home">
    <h1>2DV515 - Assignment 2</h1>

    <p id="error" v-if="error">{{error}}</p>

    <button v-on:click="getData()">Get data</button>

    <ul v-for="cluster in data" :key="cluster">
      <h2>Cluster</h2>
      <li v-for="item in cluster" :key="item">
        {{item}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
    data: function() {
        return {
            data: null,
            error: "",
        }
    },
    methods: {
      getData: function() {
          axios.get("http://localhost:3000/api").then((response) => {
              if (response != null) {
                  let unsorted = response.data;
                  let sorted = unsorted.sort((a,b) => a.cluster - b.cluster);

                  this.data = sorted;
              } else {
                  console.log(response);
              }
          })
      },

    }
}
</script>