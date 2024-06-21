<template>
  <div id="app">
    <div class="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8MfAf99Ncc-HZQm95_W1euKDFhCrLWOvkw&s" alt="La Liga Logo" class="la-liga-logo">
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Time</th>
            <th>PTS</th>
            <th>J</th>
            <th>CA</th>
            <th>GF</th>
            <th>GA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, index) in times" :key="time.team.id" :class="getRowClass(index)">
            <td class="logo-cell"><img :src="time.team.logos[0].href" alt="Logo" class="team-logo"></td>
            <td>{{ time.team.name }}</td>
            <td>{{ time.stats[3].value }}</td>
            <td>{{ time.stats[0].value }}</td>
            <td>{{ time.stats[6].value }}</td>
            <td>{{ time.stats[5].value }}</td>
            <td>{{ time.stats[4].value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="legend">
      <h3>Legenda</h3>
      <ul>
        <li><span class="color-box champions-league"></span> Liga dos Campeões</li>
        <li><span class="color-box europa-league"></span> Liga Europa</li>
        <li><span class="color-box mid-table"></span> Meio da Tabela</li>
        <li><span class="color-box relegation"></span> Rebaixamento</li>
      </ul>
    </div>
  </div>
</template>

<script>
const API_URL = `http://api-football-standings.azharimm.dev/leagues/esp.1/standings?season=2023&sort=asc/`

export default {
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
    },
    getRowClass(index) {
      if (index < 4) return 'champions-league';
      if (index >= 4 && index < 7) return 'europa-league';
      if (index >= this.times.length - 3) return 'relegation';
      return 'mid-table';
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
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
}

#app {
  text-align: center;
  width: 100%;
  max-width: 1200px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.la-liga-logo {
  width: 150px;
  height: 150px;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px; /* Diminuir a margem superior */
}

th, td {
  padding: 10px;
  border: 1px solid #000000;
  text-align: left;
  min-width: 80px;
}

th {
  background-color: #f2250a;
}

tr:nth-child(even) {
  background-color: #ffffff;
}

tr:hover {
  background-color: #ffffff;
}

.team-logo {
  width: 30px;
  height: 30px;
}

.logo-cell {
  border-left-width: 5px;
  border-left-style: solid;
}

.champions-league .logo-cell {
  border-left-color: blue;
}

.europa-league .logo-cell {
  border-left-color: rgb(255, 153, 0);
}

.relegation .logo-cell {
  border-left-color: red;
}

.mid-table .logo-cell {
  border-left-color: green;
}

.legend {
  margin-top: 20px;
  text-align: left;
}

.legend h3 {
  margin-bottom: 10px;
}

.legend ul {
  list-style-type: none;
  padding: 0;
}

.legend li {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
}

.color-box.champions-league {
  background-color: blue;
}

.color-box.europa-league {
  background-color: rgb(255, 166, 0);
}

.color-box.relegation {
  background-color: red;
}

.color-box.mid-table {
  background-color: green;
}
</style>
