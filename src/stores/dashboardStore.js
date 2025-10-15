import { api } from 'boot/axios'
import { defineStore } from 'pinia'
import { errorMsg } from 'src/utils/toasts'
import { i18n } from 'boot/i18n'

export const useDashboardStore = defineStore('data', {
    state: () => ({
        renters: [],
        users: [],
        loading: false,
        error: null,
        numberOfAdmins: 0,
        numberOfUsers: 0,
    }),
    actions: {
        async fetchRenters() {
            this.loading = true
            this.error = null

            try {
                let allRenters = []
                let page = 0
                const size = 50 // ou o que a API permitir
                let totalPages = 1

                do {
                    const response = await api.get(`/dashboard/rentsPerRenter?page=${page}&size=${size}`)
                    const content = response.data.content

                    allRenters = allRenters.concat(
                        content.map(item => ({
                            name: item.name,
                            rentsQuantity: item.rentsQuantity,
                            rentsActive: item.rentsActive
                        }))
                    )

                    totalPages = response.data.totalPages
                    page++
                } while (page < totalPages)

                this.renters = allRenters

            } catch (e) {
                console.error('Error to fetch renters in dashboard:', e.response?.data || e.message)
                errorMsg(i18n.global.t('toasts.error.getError'))
            } finally {
                this.loading = false
            }
        },

        fetchRentersAndAdmins () {
            return api.get('/user')
            .then(response => {
            const allUsers = response.data
            this.users = allUsers.role

            // Contagem de admins e usuários
            this.numberOfAdmins = allUsers.filter(u => u.role === 'ADMIN').length
            this.numberOfUsers = allUsers.filter(u => u.role !== 'ADMIN').length

            console.log('Admins:', this.numberOfAdmins, 'Users:', this.numberOfUsers)
            console.log(response)
        })
            .catch (e => {
                console.error('Error to fetch admins in dashboard:', e.response?.data || e.message)
                errorMsg(i18n.global.t('toasts.error.getError'))
            })

        },
    }
})