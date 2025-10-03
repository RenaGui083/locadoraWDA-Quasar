import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { useUserStore } from 'src/stores/usersStore';
import { storeToRefs } from 'pinia'

export function useCrud() {
    const newUser = ref({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    const $q = useQuasar()

    const { t } = useI18n()
    const { locale } = useI18n()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)

    const options = computed(() => [
        { label: t('users.createModal.user'), value: 'USER' },
        { label: t('users.createModal.admin'), value: 'ADMIN' }
    ])

    const userStore = useUserStore()
    const { users, loading, error } = storeToRefs(userStore)

    const filter = ref("")
    const formRef = ref(null)

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = computed(() => [
        { name: "name", label: t('users.table.name'), field: "name", align: "left", sortable: true },
        { name: "email", label: t('users.table.email'), field: "email", align: "left", sortable: true },
        { name: "role", label: t('users.table.role'), field: "role", align: "left", sortable: true },
        { name: "actions", label: t('users.table.actions'), field: "actions", align: "center", filter: false }
    ])

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    // get users on mount
    onMounted(async () => {
        try {
            await userStore.fetchUsers()
            console.log('Users fetched successfully on mount.')
        } catch (error) {
            console.error('Error fetching users on mount:', error)
        }
    })

    //add user

    async function addUser() {
        const success = await formRef.value.validate()
        if (success) {
            const added = await userStore.addUser(newUser.value)
            if (added) {
                await userStore.fetchUsers()
                newUser.value = { name: '', email: '', password: '', role: '' }
                openModalCreate.value = false
            }
        } else {
            console.log('Invalid form')
        }
    }

    return {
        newUser, addUser,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, options, openModalConfirm,

        t, i18n, locale,

        filter, pagination, columns,

        paginationLabel, users, loading, error
    }
}