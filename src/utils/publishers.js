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
        { name: "email", label: "Editora", field: "publisher", align: "left", sortable: true },
        { name: "telephone", label: "Autor", field: "author", align: "left", sortable: true },
        { name: "site", label: "Lançamento", field: "launchDate", align: "left", sortable: true },
        { name: "actions", label: "Ações", field: "actions", align: "center" }
    ]

    const rows = ref([
        { name: "Companhia das Letras", publisher: "contato@letras.com.br", author: "(11) 3333-4444", launchDate: "https://www.companhiadasletras.com.br" },
        { name: "Record", publisher: "info@record.com.br", author: "(21) 2222-5555", launchDate: "https://www.record.com.br" },
        { name: "Rocco", publisher: "sac@rocco.com.br", author: "(11) 4444-6666", launchDate: "https://www.rocco.com.br" },
        { name: "Intrínseca", publisher: "contato@intrinseca.com.br", author: "(31) 5555-7777", launchDate: "https://www.intrinseca.com.br" },
        { name: "DarkSide Books", publisher: "contato@darksidebooks.com.br", author: "(21) 9999-0000", launchDate: "https://www.darksidebooks.com.br" },
        { name: "Zahar", publisher: "sac@zahar.com.br", author: "(11) 3333-8888", launchDate: "https://www.zahar.com.br" },
        { name: "Editora Gutenberg", publisher: "contato@gutenberg.com.br", author: "(41) 2222-9999", launchDate: "https://www.gutenberg.com.br" }
    ])

    return { 
        email, name, telephone, site, 
        
        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm,
    
        filter, pagination, columns, rows
    }
}