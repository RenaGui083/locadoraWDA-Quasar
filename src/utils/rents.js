import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { useRentsStore } from 'src/stores/rentsStore';
import { storeToRefs } from 'pinia'

export function useCrud() {
    const rentsStore = useRentsStore()

    const newRent = ref({
        renterId: null,
        bookId: null,
        deadLine: ''
    })

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalBookReturn = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")
    const formRef = ref(null)
    // const formRefEdit = ref(null)

    const { t } = useI18n()
    const { locale } = useI18n()

    const { fetchRentsTable, rents, loading, error } = storeToRefs(rentsStore)

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


    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

   const booksOptions = computed(() => {
    if (!rents.value || !rents.value.length) return []

    // Map para remover duplicados pelo bookId
    const map = new Map(rents.value.map(r => [r.book.id, r.book.name]))
    return Array.from(map, ([id, name]) => ({
        label: name,
        value: Number(id)  // garante que seja number
    }))
})


const rentersOptions = computed(() => {
    if (!rents.value || !rents.value.length) return []

    // Map para remover duplicados pelo renterId
    const map = new Map(rents.value.map(r => [r.renter.id, r.renter.name]))
    return Array.from(map, ([id, name]) => ({
        label: name,
        value: Number(id)  // garante que seja number
    }))
})


    //get rents on load

    onMounted(async () => {
        try {
            await rentsStore.fetchRents()
            console.log('Publishers fetched on mount')
        } catch (error) {
            console.log(error)('Failed to fetch publishers on mount')
        }
    })

    //add rent

    async function addRent() {
    const success = await formRef.value.validate()
    if (!success) {
        console.log('Invalid form')
        return
    }

    // Formata deadLine para YYYY-MM-DD
    let formattedDeadLine = ''
    if (newRent.value.deadLine) {
        const [day, month, year] = locale.value === 'en-US'
            ? newRent.value.deadLine.split('/') // MM/DD/YYYY
            : newRent.value.deadLine.split('/') // DD/MM/YYYY
        formattedDeadLine = `${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`
    }

    const payload = {
        renterId: Number(newRent.value.renterId),
        bookId: Number(newRent.value.bookId),
        deadLine: formattedDeadLine
    }

    try {
        await rentsStore.addRent(payload)
        $q.notify({ type: 'positive', message: t('rents.success') })

        // Reset do form
        newRent.value = { bookId: '', renterId: '', deadLine: '' }
        openModalCreate.value = false
        formRef.value.resetValidation()
    } catch (err) {
        $q.notify({ type: 'negative', message: err.response?.data?.message || err.message })
    }
}




    return {
        newRent, addRent, formRef, fetchRentsTable, booksOptions, rentersOptions,

        $q, openModalCreate, openModalEdit, openModalBookReturn, openModalConfirm, t, i18n, locale,

        filter, pagination, columns, paginationLabel, rents, loading, error
    }
}