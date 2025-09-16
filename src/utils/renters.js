import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';

export function useCrud() {
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

    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    const columns = [
        { name: "name", label: t('renters.table.name'), field: "name", align: "left", sortable: true },
        { name: "email", label: t('renters.table.email'), field: "email", align: "left", sortable: true },
        { name: "telephone", label: t('renters.table.telephone'), field: "telephone", align: "left", sortable: true },
        { name: "cpf", label: t('renters.table.cpf'), field: "cpf", align: "left", sortable: true },
        { name: "actions", label: t('renters.table.actions'), field: "actions", align: "center", filter: false }
    ]

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    const rows = ref([
        { name: "Companhia das Letras", email: "contato@letras.com.br", telephone: "(11) 3333-4444", cpf: "12.345.678/0001-90" },
        { name: "Record", email: "info@record.com.br", telephone: "(21) 2222-5555", cpf: "98.765.432/0001-12" },
        { name: "Rocco", email: "sac@rocco.com.br", telephone: "(11) 4444-6666",  cpf: "56.789.123/0001-45" },
        { name: "Intrínseca", email: "contato@intrinseca.com.br", telephone: "(31) 5555-7777", cpf: "34.567.890/0001-67" },
        { name: "DarkSide Books", email: "contato@darksidebooks.com.br", telephone: "(21) 9999-0000", cpf: "45.678.901/0001-23" },
        { name: "Zahar", email: "sac@zahar.com.br", telephone: "(11) 3333-8888", cpf: "23.456.789/0001-56" },
        { name: "Editora Gutenberg", email: "contato@gutenberg.com.br", telephone: "(41) 2222-9999",cpf: "67.890.123/0001-89" }
    ])


    return {
        email, name, telephone, address, cpf,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, openModalConfirm,

        filter, pagination, columns, rows,

        t, i18n, locale, paginationLabel
    }
}