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

    const editRenter = ref({
        name: '',
        email: '',
        telephone: '',
        cpf: '',
        address: ''
    })

    // const editedRenter = ref({
    //     name: '',
    //     email: '',
    //     telephone: '',
    //     cpf: '',
    //     address: ''
    // })


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
    const formRefEdit = ref(null)
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
            const added = await renterStore.addRenter({ ...newRenter.value })
            if (added) {
                await renterStore.fetchRenters()
                newRenter.value = { name: '', email: '', telephone: '', address: '', cpf: '' }
                openModalCreate.value = false
            }
        } else {
            console.log('Invalid form')
        }
    }

    //update renter

    async function tryOpenConfirm() {
        if (!formRefEdit.value) return
        const valid = await formRefEdit.value.validate()
        if (valid) {
            openModalConfirm.value = true
            openModalEdit.value = false
        } else {
            console.warn('Formulário inválido')
        }
    }

    function prepareEditRenter(renter) {
        openModalEdit.value = true
        selectRenter.value = renter

        editRenter.value = {
            name: renter.name,
            email: renter.email,
            telephone: renter.telephone,
            cpf: renter.cpf,
            address: renter.address
        }
    }



    return {

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, openModalConfirm,

        filter, pagination, columns,

        t, i18n, locale, paginationLabel,

        renters, loading, error,

        addRenter, newRenter, formRef, isDuplicate, selectRenter, editRenter, tryOpenConfirm, formRefEdit, prepareEditRenter
    }
}