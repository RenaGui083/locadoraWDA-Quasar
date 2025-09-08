import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const telephone = ref('')
    const site = ref('')

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
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
        { name: "site", label: "Site", field: "site", align: "left", sortable: true },
        { name: "actions", label: "Ações", field: "actions", align: "center", filter: false }
    ]

    const rows = ref([
        { name: "Companhia das Letras", email: "contato@letras.com.br", telephone: "(11) 3333-4444", site: "https://www.companhiadasletras.com.br", actions: "" },
        { name: "Record", email: "info@record.com.br", telephone: "(21) 2222-5555", site: "https://www.record.com.br", actions: "" },
        { name: "Rocco", email: "sac@rocco.com.br", telephone: "(11) 4444-6666", site: "https://www.rocco.com.br", actions: "" },
        { name: "Intrínseca", email: "contato@intrinseca.com.br", telephone: "(31) 5555-7777", site: "https://www.intrinseca.com.br", actions: "" },
        { name: "DarkSide Books", email: "contato@darksidebooks.com.br", telephone: "(21) 9999-0000", site: "https://www.darksidebooks.com.br", actions: "" },
        { name: "Zahar", email: "sac@zahar.com.br", telephone: "(11) 3333-8888", site: "https://www.zahar.com.br", actions: "" },
        { name: "Editora Gutenberg", email: "contato@gutenberg.com.br", telephone: "(41) 2222-9999", site: "https://www.gutenberg.com.br", actions: "" }
    ])

    return {
        email, name, telephone, site,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm,

        filter, pagination, columns, rows
    }
}