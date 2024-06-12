export default {
    name: 'Futebol',
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    template: '
    <div id="app">
    <h1>LA LIGA</h1>
    <H4>Primeira Divisão</H4>
    <ul>
    <li>Time: {{ time.team.name }}</li>
    <li>Pontos: {{ time.stats[3].value }}</li>
    <li>Gols Sofridos: {{ time.stats[4].value }}</li>
    <li>Gols Feitos: {{ time.stats[5].value }}</li>
    </ul>
    </div>
    '
}