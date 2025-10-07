import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { useRentsStore } from 'src/stores/rentsStore';
import { storeToRefs } from 'pinia'

export function useCrud() {
    const rentsStore = useRentsStore()

    const newRent = ref({
        book: '',
        renter: '',
        rentDate: '',
        deadLine: '',
        status: ''
    })

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalBookReturn = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")

    const { t } = useI18n()
    const { locale } = useI18n()

    const { rents, loading, error } = storeToRefs(rentsStore)

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = computed(() => [
        { name: "book", label: t('rents.table.book'), field: "book", align: "left", sortable: true },
        { name: "renter", label: t('rents.table.renter'), field: "renter", align: "left", sortable: true },
        { name: "rentDate", label: t('rents.table.rentDate'), field: "rentDate", align: "left", sortable: true },
        { name: "deadLine", label: t('rents.table.deadLine'), field: "deadLine", align: "left", sortable: true },
        { name: "status", label: t('rents.table.status'), field: "status", align: "left", sortable: true },
        { name: "actions", label: t('rents.table.actions'), field: "actions", align: "center", filter: false }
    ])

    // Select de livros
const booksOptions = computed(() =>
  [...new Map(rents.value.map(r => [r.bookId, r.book])).entries()]
    .map(([id, label]) => ({ label, value: id }))
)

// Select de locatários
const rentersOptions = computed(() =>
  [...new Map(rents.value.map(r => [r.renterId, r.renter])).entries()]
    .map(([id, label]) => ({ label, value: id }))
)


    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    //get rents on load

    onMounted(async () => {
        try {
            await rentsStore.fetchRents()
            console.log('Publishers fetched on mount')
        } catch (error) {
            console.log(error)('Failed to fetch publishers on mount')
        }
    })


    return {
        newRent, booksOptions, rentersOptions,

        $q, openModalCreate, openModalEdit, openModalBookReturn, openModalConfirm, t, i18n, locale,

        filter, pagination, columns, paginationLabel, rents, loading, error
    }
}