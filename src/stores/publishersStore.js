import { api } from 'boot/axios'
import { defineStore } from 'pinia'
import { successMsg, errorMsg } from 'src/utils/toasts'

export const usePublisherStore = defineStore('publisher', {
    state: () => ({
        publishers: [],
        loading: false,
        error: null
    }),

    actions: {
        fetchPublishers() {
            this.loading = true
            this.error = null

            return api.get('/publisher')
                .then(response => {
                    this.publishers = response.data
                    console.log("Publishers fetched on mount")
                })
                .catch(e => {
                    console.error('Erro:', e.response?.data || e.message);
                    errorMsg("Erro ao obter dados!");
                })
                .finally(() => {
                    this.loading = false
                })
        },

        addPublisher(publisher) {
            return api.post('/publisher', publisher)
                .then(response => {
                    this.publishers.push(response.data)
                    successMsg('Cadastro realizado com sucesso!')
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    errorMsg(msg);
                    console.error('Erro:', error.response?.data || error.message);
                })
        },

        updatePublisher(id, updated) {
            return api.put(`/publisher/${id}`, updated)
                .then(response => {
                    const index = this.publishers.findIndex(p => p.id === id)
                    if (index !== -1) this.publishers[index] = response.data
                    successMsg('Atualização realizada com sucesso!')
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    errorMsg(msg);
                })
        },

        deletePublisher(id) {

            return api.delete(`/publisher/${id}`)
                .then(() => {
                    this.publishers = this.publishers.filter(p => p.id !== id)
                    successMsg('Exclusão realizada com sucesso!')
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    errorMsg(msg);
                })

        }
    }
})