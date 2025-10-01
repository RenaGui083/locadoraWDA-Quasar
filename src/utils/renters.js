import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { useRenterStore } from 'src/stores/rentersStore';
import { storeToRefs } from 'pinia'

export function useCrud() {

    const renterStore = useRenterStore()
    const { renters, loading, error } = storeToRefs(renterStore)

    const newRenter = ref({
        name: '',
        email: '',  
        telephone: '',
        address: '',
        cpf: ''
    })

    const email = ref('')
    const name = ref('')
    const telephone = ref('')
    const address = ref('')
    const cpf = ref('')

    const $q = useQuasar()

    const { t } = useI18n()
    const { locale } = useI18n()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)

    const filter = ref("")
    const formRef = ref(null)
    const selectRenter = ref(null)

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    function isDuplicate(field, value) {
        if (!value) return true

        const isDuplicated = renters.value.some(
            p => p[field] === value && p.id !== (selectRenter.value?.id ?? null)
        )

        return isDuplicated ? t('errorDuplicate') : true
    }

    const columns = computed(() => [
        { name: "name", label: t('renters.table.name'), field: "name", align: "left", sortable: true },
        { name: "email", label: t('renters.table.email'), field: "email", align: "left", sortable: true },
        { name: "telephone", label: t('renters.table.telephone'), field: "telephone", align: "left", sortable: true },
        { name: "cpf", label: t('renters.table.cpf'), field: "cpf", align: "left", sortable: true },
        { name: "actions", label: t('renters.table.actions'), field: "actions", align: "center", filter: false }
    ])

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    //get renters on load

    onMounted(async () => {
        try {
            await renterStore.fetchRenters()
            console.log('renters fetched on mount')
        } catch (error) {
            console.log(error)('Failed to fetch publishers on mount')
        }
    })

    //add renter

    async function addRenter() {
        const success = await formRef.value.validate()
        if (success) {
            await renterStore.addRenter({ ...newRenter.value })
            await renterStore.fetchRenters()
            newRenter.value = { name: '', email: '', telephone: '', address: '', cpf: '' }
            openModalCreate.value = false
        } else {
            console.log('Invalid form')
        }
    }


    return {
        email, name, telephone, address, cpf,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, openModalConfirm,

        filter, pagination, columns,

        t, i18n, locale, paginationLabel,

        renters, loading, error,

        addRenter, newRenter, formRef, isDuplicate, selectRenter
    }
}