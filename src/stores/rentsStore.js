import { api } from 'boot/axios'
import { defineStore } from 'pinia'
import { successMsg, errorMsg } from 'src/utils/toasts'
import { i18n } from 'boot/i18n'
import { watch } from 'vue'

export const useRentsStore = defineStore('rents', {
    state: () => ({
        rents: [],
        loading: false,
        error: null
    }),
    actions: {
        fetchRents() {
            this.loading = true
            this.error = null

            return api.get('/rent')
                .then(response => {
                    const locale = i18n.global.locale.value || i18n.global.locale
                    this.rents = response.data.map(rent => ({
                        ...rent,
                        book: rent.book.name,
                        renter: rent.renter.name,
                        bookId: rent.book.id,          
                        renterId: rent.renter.id,      
                        rentDate: rent.rentDate
                            ? new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(rent.rentDate))
                            : '',
                        deadLine: rent.deadLine
                            ? new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(rent.deadLine))
                            : '',
                        status: i18n.global.t(`rents.status.${rent.status}`)
                    }))
                })
                .catch(e => {
                    console.error('Erro:', e.response?.data || e.message);
                    errorMsg(i18n.global.t('toasts.error.getError'));
                })
                .finally(() => {
                    this.loading = false
                })
        },

        addRent(rent) {
            return api.post('/rent', rent)
                .then(response => {
                    this.rents.push(response.data)
                    successMsg(i18n.global.t('toasts.success.postSuccess'))
                    return true
                })
                .catch(error => {
                    errorMsg(i18n.global.t('toasts.error.postError'));
                    console.error('Erro:', error.response?.data || error.message);
                    return false
                })
        },

        updateRent(id, updated) {
            return api.put(`/rent/${id}`, updated)
                .then(response => {
                    const index = this.rents.findIndex(r => r.id === id)
                    if (index !== -1) this.rents[index] = response.data
                    successMsg(i18n.global.t('toasts.success.putSuccess'))
                    return true
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    console.error('Erro:', msg);
                    errorMsg(i18n.global.t('toasts.error.putError'));
                    return false
                })
        },

        finishRent(id) {
            return api.put(`/rent/${id}`)
                .then(() => {
                    successMsg(i18n.global.t('toasts.success.finishRent'))
                    return true
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    console.error('Erro:', msg);
                    errorMsg(i18n.global.t('toasts.error.finishRent'));
                    return false
                })
        }
    }
})

const rentsStore = useRentsStore()
watch(
    () => i18n.global.locale.value,
    () => {
        if (rentsStore.rents.length) rentsStore.fetchRents()
    }
)