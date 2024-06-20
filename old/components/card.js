export default {
    name: 'Futebol',
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    template: `<ul>
        <li>Tecnologia: {{ tech.nome_tecnologia }}</li>
        <li>Versão: {{ tech.versao }}</li>
        <li>Data de Lançamento: {{ tech.data_lancamento }}</li>
        <li>Popularidade: {{ tech.popular }}</li>
    </ul>`
}