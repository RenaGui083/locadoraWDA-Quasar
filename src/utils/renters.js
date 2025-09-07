import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const telephone = ref('')
    const address = ref('')
    const cpf = ref('')

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")

    const pagination = ref({
        page: 1,
        rowsPerPage: 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "name", label: "Nome", field: "name", align: "left", sortable: true },
        { name: "email", label: "Email", field: "email", align: "left", sortable: true },
        { name: "telephone", label: "Telefone", field: "telephone", align: "left", sortable: true },
        { name: "address", label: "Endereço", field: "address", align: "left", sortable: true },
        { name: "cpf", label: "CPF", field: "cpf", align: "left", sortable: true },
        { name: "actions", label: "Ações", field: "actions", align: "center" }
    ]

    const rows = ref([
        { name: "Companhia das Letras", email: "contato@letras.com.br", telephone: "(11) 3333-4444", address: "Rua Bandeira Paulista, 702 - São Paulo/SP", cpf: "12.345.678/0001-90" },
        { name: "Record", email: "info@record.com.br", telephone: "(21) 2222-5555", address: "Rua Argentina, 171 - Rio de Janeiro/RJ", cpf: "98.765.432/0001-12" },
        { name: "Rocco", email: "sac@rocco.com.br", telephone: "(11) 4444-6666", address: "Rua do Catete, 153 - Rio de Janeiro/RJ", cpf: "56.789.123/0001-45" },
        { name: "Intrínseca", email: "contato@intrinseca.com.br", telephone: "(31) 5555-7777", address: "Rua Marquês de São Vicente, 99 - Rio de Janeiro/RJ", cpf: "34.567.890/0001-67" },
        { name: "DarkSide Books", email: "contato@darksidebooks.com.br", telephone: "(21) 9999-0000", address: "Avenida das Américas, 500 - Rio de Janeiro/RJ", cpf: "45.678.901/0001-23" },
        { name: "Zahar", email: "sac@zahar.com.br", telephone: "(11) 3333-8888", address: "Rua do Ouvidor, 110 - Rio de Janeiro/RJ", cpf: "23.456.789/0001-56" },
        { name: "Editora Gutenberg", email: "contato@gutenberg.com.br", telephone: "(41) 2222-9999", address: "Rua Des. Motta, 123 - Curitiba/PR", cpf: "67.890.123/0001-89" }
    ])


    return {
        email, name, telephone, address, cpf,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, openModalConfirm,

        filter, pagination, columns, rows
    }
}