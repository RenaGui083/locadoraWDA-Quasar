import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const role = ref('')

    const $q = useQuasar()

    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)

    const options = [
        { label: 'Ususário', value: 'USER' },
        { label: 'Administrador', value: 'ADMIN' }
    ]

    const filter = ref("")

    const pagination = ref({
        page: 1,
        rowsPerPage: 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "name", label: "Nome", field: "name", align: "left", sortable: true },
        { name: "email", label: "Email", field: "email", align: "left", sortable: true },
        { name: "password", label: "Senha", field: "password", align: "left", sortable: true },
        { name: "role", label: "Nível de acesso", field: "role", align: "left", sortable: true },
        { name: "actions", label: "Ações", field: "actions", align: "center" }
    ]

    const rows = ref([
        { name: "Renan Guilherme", email: "renan.guilherme@email.com", password: "********", role: "Administrador" },
        { name: "Ana Silva", email: "ana.silva@email.com", password: "********", role: "Usuário" },
        { name: "Carlos Souza", email: "carlos.souza@email.com", password: "********", role: "Usuário" },
        { name: "Mariana Rocha", email: "mariana.rocha@email.com", password: "********", role: "Administrador" },
        { name: "João Pedro", email: "joao.pedro@email.com", password: "********", role: "Usuário" },
        { name: "Fernanda Lima", email: "fernanda.lima@email.com", password: "********", role: "Administrador" }
    ])

    return {
        email, name, password, role,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, options, openModalConfirm,

        filter, pagination, columns, rows
    }
}