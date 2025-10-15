import { ref, watch, onMounted, computed } from 'vue'
import { useQuasar } from 'quasar'
import ChartBar1 from "src/components/DashboardChartBar1.vue";
import ChartBar2 from "src/components/DashboardChartBar2.vue";
import ChartPie1 from "src/components/DashboardChartPie1.vue";
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { useDashboardStore } from 'src/stores/dashboardStore';
import { storeToRefs } from 'pinia'


export function useCrud() {
    const dashboardStore = useDashboardStore()
    
    const { t } = useI18n()

    const $q = useQuasar()

    const pagination = ref({
        page: 1,
        rowsPerPage: 2
    })

     const { renters, loading, error, fetchRenters, numberOfAdmins, numberOfUsers } = storeToRefs(dashboardStore)

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    onMounted(async () => { // onMounted = window.onload do javaScript
        try {
            await Promise.all([
                dashboardStore.fetchRenters(),
                dashboardStore.fetchRentersAndAdmins()
            ])
            console.log('data fetched on mount')
        } catch (error) {
            console.log(error)('Failed to fetch data on mount')
        }
        if ($q.screen.gt.   lg) {
            pagination.value.rowsPerPage = 5
        } else if ($q.screen.lt.lg) {
            pagination.value.rowsPerPage = 3
        }
    })
    const columns = computed(() => [
  { name: "name", label: t('dashboard.table.renters'), field: "name", align: "left", sortable: true },
  { name: "rentsQuantity", label: t('dashboard.table.rentsQuantity'), field: "rentsQuantity", align: "left", sortable: true },
  { name: "rentsActive", label: t('dashboard.table.rentsActive'), field: "rentsActive", align: "left", sortable: true }
])

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`


    


    return {
        ChartBar1, ChartBar2, ChartPie1, renters, loading, error, fetchRenters,

        $q, t, i18n, numberOfAdmins, numberOfUsers,

        pagination, columns,paginationLabel
    }
}