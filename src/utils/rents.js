import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';

export function useCrud() {
    const renter = ref('')
    const book = ref('')
    const deadLine = ref('')

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalBookReturn = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")

    const { t } = useI18n()
    const { locale } = useI18n()

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "book", label: t('rents.table.book'), field: "book", align: "left", sortable: true },
        { name: "renter", label: t('rents.table.renter'), field: "renter", align: "left", sortable: true },
        { name: "rentDate", label: t('rents.table.rentDate'), field: "rentDate", align: "left", sortable: true },
        { name: "deadLine", label: t('rents.table.deadLine'), field: "deadLine", align: "left", sortable: true },
        { name: "status", label: t('rents.table.status'), field: "status", align: "left", sortable: true },
        { name: "actions", label: t('rents.table.actions'), field: "actions", align: "center" , filter: false}
    ]

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

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

        $q, openModalCreate, openModalEdit, openModalBookReturn, openModalConfirm,  t, i18n, locale,

        filter, pagination, columns, rows,paginationLabel
    }
}