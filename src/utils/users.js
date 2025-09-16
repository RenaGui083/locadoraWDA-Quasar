import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const role = ref('')

    const $q = useQuasar()

    const { t } = useI18n()
    const { locale } = useI18n()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)

    const options = [
        { label: t('users.createModal.user'), value: 'USER' },
        { label: t('users.createModal.admin'), value: 'ADMIN' }
    ]

    const filter = ref("")

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "name", label: t('users.table.name'), field: "name", align: "left", sortable: true },
        { name: "email", label: t('users.table.email'), field: "email", align: "left", sortable: true },
        { name: "role", label: t('users.table.role'), field: "role", align: "left", sortable: true },
        { name: "actions", label: t('users.table.actions'), field: "actions", align: "center", filter: false }
    ]

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    const rows = ref([
        { name: "Renan Guilherme", email: "renan.guilherme@email.com", role: "Administrador" },
        { name: "Ana Silva", email: "ana.silva@email.com", role: "Usuário" },
        { name: "Carlos Souza", email: "carlos.souza@email.com", role: "Usuário" },
        { name: "Mariana Rocha", email: "mariana.rocha@email.com", role: "Administrador" },
        { name: "João Pedro", email: "joao.pedro@email.com", role: "Usuário" },
        { name: "Fernanda Lima", email: "fernanda.lima@email.com", role: "Administrador" }
    ])

    return {
        email, name, password, role,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, options, openModalConfirm, 
         t, i18n, locale,

        filter, pagination, columns, rows,
         paginationLabel
    }
}