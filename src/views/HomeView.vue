<template>
  <div>
    <h1>LA LIGA</h1>
    <H4>Primeira Divisão</H4>
  
    <div v-for="time in times" :key="time.id">
      <ul>
        <li>Time: {{ time.team.name }}</li>
        <li>Pontos: {{ time.stats[3].value }}</li>
        <li>Gols Sofridos: {{ time.stats[4].value }}</li>
        <li>Gols Feitos: {{ time.stats[5].value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const API_URL = `http://api-football-standings.azharimm.dev/leagues/esp.1/standings?season=2023&sort=asc/`

export default{
  data() {
    return {
      times: []
    }
  },
  methods: {
    async fetchTimes() {
      const response = await fetch(API_URL)
      const data = await response.json()
      this.times = data.data.standings
      console.log(data)
    }
  },
  created() {
    this.fetchTimes()
  }
}
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

#app {
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  align-items: center;
}

ul li img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border-radius: 3px;
}

div {
  background: #e8e8e8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

li:nth-child(odd) {
  background: #f9f9f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
