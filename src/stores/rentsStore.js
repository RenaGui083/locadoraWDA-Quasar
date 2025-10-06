import { api } from 'boot/axios'
import { defineStore } from 'pinia'
import { successMsg, errorMsg } from 'src/utils/toasts'
import { i18n } from 'boot/i18n'

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
                    this.rents = response.data
                })
                .catch(e => {
                    console.error('Erro:', e.response?.data || e.message);
                    errorMsg(i18n.global.t('toasts.error.getError'));
                })
                .finally(() => {
                    this.loading = false
                })
        },
    }
})