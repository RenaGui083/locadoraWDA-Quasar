import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const renter = ref('')
    const book = ref('')
    const deadLine = ref('')

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalDevolution = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "book", label: "Livro", field: "book", align: "left", sortable: true },
        { name: "renter", label: "Locatário", field: "renter", align: "left", sortable: true },
        { name: "rentDate", label: "Data de locação", field: "rentDate", align: "left", sortable: true },
        { name: "deadLine", label: "Data de devolução", field: "deadLine", align: "left", sortable: true },
        { name: "status", label: "Status", field: "status", align: "left", sortable: true },
        { name: "actions", label: "Ações", field: "actions", align: "center" , filter: false}
    ]

    const rows = ref([
        { book: "Dom Casmurro", renter: "Renan Guilherme", rentDate: "2025-09-01", deadLine: "2025-09-10", status: "Devolvido no prazo" },
        { book: "O Senhor dos Anéis", renter: "Ana Silva", rentDate: "2025-09-03", deadLine: "2025-09-15", status: "Devolvido no prazo"},
        { book: "1984", renter: "Carlos Souza", rentDate: "2025-09-05", deadLine: "2025-09-20",status: "Devolvido no prazo" },
        { book: "A Menina que Roubava Livros", renter: "Mariana Rocha", rentDate: "2025-09-07", deadLine: "2025-09-18",status: "Pendente" },
        { book: "Harry Potter e a Pedra Filosofal", renter: "João Pedro", rentDate: "2025-09-08", deadLine: "2025-09-19",status: "Pendente" },
        { book: "O Pequeno Príncipe", renter: "Fernanda Lima", rentDate: "2025-09-02", deadLine: "2025-09-12" ,status: "Entregue com atraso" }
    ])


    return {
        renter, book, deadLine,

        $q, openModalCreate, openModalEdit, openModalDevolution, openModalConfirm,

        filter, pagination, columns, rows
    }
}