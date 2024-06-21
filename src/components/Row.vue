<template>
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
          <tr v-for="time in times" :key="time.team.id">
            <td><img :src="time.team.logos[0].href" alt="Logo" class="team-logo"></td>
            <td>{{ time.team.name }}</td>
            <td>{{ time.stats[3].value }}</td>
            <td>{{ time.stats[0].value }}</td>
            <td>{{ time.stats[6].value }}</td>
            <td>{{ time.stats[5].value }}</td>
            <td>{{ time.stats[4].value }}</td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
    name: 'Futebol',
    props: {
        person: {
            type: Object,
            required: true
        }
    },
}
</script>

