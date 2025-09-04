import { ref } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const author = ref('')
    const name = ref('')
    const publisher = ref('')
    const launchDate = ref('')
    const totalQuantity = ref('')

    const $q = useQuasar()
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalConfirm = ref(false)


    return {  name, publisher, author, launchDate, totalQuantity, $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm }
}