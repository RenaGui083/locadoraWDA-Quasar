import { ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { storeToRefs } from 'pinia'
import { usePublisherStore } from 'src/stores/publishersStore'
import { getSuccess, getError } from 'src/utils/toasts'

export function useCrud() {
    // const email = ref('')
    // const name = ref('')
    // const telephone = ref('')
    // const site = ref('')

    const publisherStore = usePublisherStore()
    const newPublisher = ref({
        name: '',
        email: '',
        telephone: '',
        site: ''
    })

    const { publishers, loading, error } = storeToRefs(publisherStore)

    const $q = useQuasar()

    const { t, locale } = useI18n()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalConfirm = ref(false)

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    const filter = ref("")

    const pagination = ref({ page: 1, rowsPerPage: $q.screen.lt.md ? 0 : 5 })

    watch(() => $q.screen.lt.md, (isMobile) => { pagination.value.rowsPerPage = isMobile ? 0 : 5 })

    const columns = [
        { name: "name", label: t('publishers.table.name'), field: "name", align: "left", sortable: true },
        { name: "email", label: t('publishers.table.email'), field: "email", align: "left", sortable: true },
        { name: "telephone", label: t('publishers.table.telephone'), field: "telephone", align: "left", sortable: true },
        { name: "site", label: t('publishers.table.site'), field: "site", align: "left", sortable: true },
        { name: "actions", label: t('publishers.table.actions'), field: "actions", align: "center", filter: false }
    ]


    onMounted(async () => {
        try {
            await publisherStore.fetchPublishers()
            getSuccess()
        } catch {
            getError()
        }
    })

    async function addPublisher() {
        await publisherStore.addPublisher({ ...newPublisher.value })
        getSuccess()
        newPublisher.value = { name: '', email: '', telephone: '', site: '' }
        openModalCreate.value = false
        newPublisher.value = { name: '', email: '', telephone: '', site: '' }
    }

    // function validateFields() {

    // }

    return {
        newPublisher, addPublisher,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm,

        filter, pagination, columns,

        t, i18n, locale, paginationLabel,

        publishers, loading, error,

    }
}