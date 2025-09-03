import { ref } from 'vue'
import logoImg from 'src/assets/logoLocadora.png'
import logoWDAbranca from 'src/assets/logo.png'
import { useQuasar } from 'quasar'

export function useCrud() {
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const role = ref('')
    const logo = logoImg
    const logoWDA = logoWDAbranca

    const $q = useQuasar()
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalView = ref(false)

    const options = [
        {label: 'Ususário', value: 'USER'},
        {label: 'Administrador', value: 'ADMIN'}
    ]

    return { email, name, password, role, logo, logoWDA, $q, openModalCreate, openModalEdit, openModalExclude,openModalView, options}
}