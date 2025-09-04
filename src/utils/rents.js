import { ref } from 'vue'
// import logoImg from 'src/assets/logoLocadora.png'
// import logoWDAbranca from 'src/assets/logo.png'
import { useQuasar } from 'quasar'

export function useCrud() {
    const renter = ref('')
    const book = ref('')
    const deadLine = ref('')
    // const logo = logoImg
    // const logoWDA = logoWDAbranca

    const $q = useQuasar()
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalDevolution = ref(false)
    const openModalConfirm = ref(false)


    return { renter,book, deadLine, $q, openModalCreate, openModalEdit, openModalDevolution, openModalConfirm }
}