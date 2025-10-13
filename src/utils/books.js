import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { storeToRefs } from 'pinia'
import { useBookStore } from 'src/stores/booksStore'

export function useCrud() {
    const booksStore = useBookStore()

    const newBook = ref({
        name: '',
        author: '',
        launchDate: '',
        totalQuantity: null,
        publisherId: null
    })

    const $q = useQuasar()

    // estados dos modais
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalConfirm = ref(false)

    const { t } = useI18n()
    const { locale } = useI18n()

    const { books, loading, error, fetchBooksTable, publishersOptions } = storeToRefs(booksStore)


    // pesquisa
    const filter = ref("")
    const formRef = ref(null)
    const selectBook = ref(null)

    // paginação
    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    function isDuplicate(field, value) {
        if (!value) return true

        const isDuplicated = books.value.some(
            b => b[field] === value && b.id !== (selectBook.value?.id ?? null)
        )

        return isDuplicated ? t('errorDuplicate') : true
    }


    // colunas
    const columns = computed(() => [
        { name: "name", label: t('library.table.name'), field: "name", align: "left", sortable: true },
        { name: "publisher", label: t('library.table.publisher'), field: "publisher", align: "left", sortable: true },
        { name: "author", label: t('library.table.author'), field: "author", align: "left", sortable: true },
        { name: "launchDate", label: t('library.table.launchDate'), field: row => formatISOToLocale(row.launchDate, locale.value), align: "left", sortable: true },
        { name: "totalQuantity", label: t('library.table.totalQuantity'), field: "totalQuantity", align: "left", sortable: true },
        { name: "totalInUse", label: t('library.table.totalInUse'), field: "totalInUse", align: "left", sortable: true },
        { name: "actions", label: t('library.table.actions'), field: "actions", align: "center", filter: false }
    ])

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    //get books on load

    onMounted(async () => {
        try {
            await Promise.all([
                booksStore.fetchBooks(),
                booksStore.fetchPublishers()
            ])
            console.log('Books fetched on mount')
        } catch (error) {
            console.log(error)('Failed to fetch Books on mount')
        }
    })

    //add books

    function formatISOToLocale(isoDate, locale) {
        if (!isoDate) return ''
        const [year, month, day] = isoDate.split('-')

        if (locale.toLowerCase() === 'en-us') {
            // MM/DD/YYYY
            return `${month}/${day}/${year}`
        } else {
            // DD/MM/YYYY
            return `${day}/${month}/${year}`
        }
    }

    function parseInputDateToISO(dateStr, locale) {
        if (!dateStr) return ''
        const parts = dateStr.split('/')
        let day, month, year

        if (locale.toLowerCase() === 'en-us') {
            // MM/DD/YYYY
            [month, day, year] = parts
        } else {
            // DD/MM/YYYY
            [day, month, year] = parts
        }

        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }

    async function addBook() {
        const success = await formRef.value.validate()
        if (!success) {
            console.log('Invalid form')
            return
        }

        const payload = {
            name: newBook.value.name,
            author: newBook.value.author,
            launchDate: parseInputDateToISO(newBook.value.launchDate, locale.value),
            totalQuantity: newBook.value.totalQuantity,
            publisherId: newBook.value.publisherId
        }

        try {
            const add = await booksStore.addBook(payload)
            if (add) {
                console.log(payload)
                newBook.value = { name: '', author: '', launchDate: '', totalQuantity: '', publisherId: '' }
                openModalCreate.value = false
                await booksStore.fetchBooks()
            }
        } catch (error) {
            console.error('Error to add book', error)
            
        }

    }

    return {

        fetchBooksTable, addBook, formRef, newBook, isDuplicate, publishersOptions,


        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm, t, i18n, locale,


        filter, pagination, columns, paginationLabel, books, loading, error
    }
}