import { ref } from 'vue'
import logoImg from 'src/assets/logoLocadora.png'
import logoWDAbranca from 'src/assets/logo.png'
import { useQuasar } from 'quasar'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const telephone = ref('')
    const address = ref('')
    const cpf = ref('')
    const logo = logoImg
    const logoWDA = logoWDAbranca

    const $q = useQuasar()
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)
    const openModalConfirm = ref(false)



    return { email, name, telephone, address, cpf, logo, logoWDA, $q, openModalCreate, openModalEdit, openModalExclude,openModalView, openModalConfirm}
}