import { ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import ChartBar1 from "src/components/DashboardChartBar1.vue";
import ChartBar2 from "src/components/DashboardChartBar2.vue";
import ChartPie1 from "src/components/DashboardChartPie1.vue";
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';

export function useCrud() {
    const { t } = useI18n()

    const $q = useQuasar()

    const pagination = ref({
        page: 1,
        rowsPerPage: 2
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    onMounted(() => { // onMounted = window.onload do javaScript
        if ($q.screen.gt.lg) {
            pagination.value.rowsPerPage = 5
        }
    })
    const columns = [
        { name: "renter", label: t('dashboard.table.renters'), field: "renter", align: "left", sortable: true },
        { name: "rentsQuantity", label: t('dashboard.table.rentsQuantity'), field: "rentsQuantity", align: "left", sortable: true },
        { name: "rentsActive", label: t('dashboard.table.rentsActive'), field: "rentsActive", align: "left", sortable: true }
    ]

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`


    const rows = ref([
        { renter: "Renan Guilherme", rentsQuantity: 12, rentsActive: 3 },
        { renter: "Ana Silva", rentsQuantity: 5, rentsActive: 2 },
        { renter: "Carlos Souza", rentsQuantity: 7, rentsActive: 0 },
        { renter: "Mariana Rocha", rentsQuantity: 10, rentsActive: 1 },
        { renter: "João Pedro", rentsQuantity: 3, rentsActive: 3 },
        { renter: "Fernanda Lima", rentsQuantity: 8, rentsActive: 2 },
        { renter: "Paulo Henrique", rentsQuantity: 4, rentsActive: 1 },
        { renter: "Isabela Martins", rentsQuantity: 6, rentsActive: 0 },
        { renter: "Lucas Almeida", rentsQuantity: 9, rentsActive: 4 },
        { renter: "Camila Ferreira", rentsQuantity: 2, rentsActive: 0 }
    ])


    return {
        ChartBar1, ChartBar2, ChartPie1,

        $q, t, i18n,

        pagination, columns, rows, paginationLabel
    }
}