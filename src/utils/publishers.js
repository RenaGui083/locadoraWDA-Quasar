import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
// import { storeToRefs } from 'pinia'
// import { usePublisherStore } from 'src/stores/publishersStore'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const telephone = ref('')
    const site = ref('')

    // const publisherStore = usePublisherStore()

    // const { publishers, loading, error } = storeToRefs(publisherStore)

    const rows = ref([])
    const $q = useQuasar()

    const { t } = useI18n()
    const { locale } = useI18n()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalConfirm = ref(false)

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

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    // onMounted(() => {
    //     publisherStore.fetchPublishers()
    // })

    return {
        email, name, telephone, site,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm,

        filter, pagination, columns, rows,

        t, i18n, locale, paginationLabel,
        
        // publishers, loading, error
    }
}