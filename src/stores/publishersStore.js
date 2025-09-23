import { api } from 'boot/axios'
import { defineStore } from 'pinia'

export const usePublisherStore = defineStore('publisher', {
    state: () => ({
        publishers: [],
        loading: false,
        error: null
    }),

    actions: {
        async fetchPublishers() {
            this.loading = true
            this.error = null
            try {
                const res = await api.get('/publisher')
                this.publishers = res.data
            } catch (err) {
                console.error(err)
                throw err 
            } finally {
                this.loading = false
            }
        },

        async addPublisher(publisher) {
            try {
                const res = await api.post('/publisher', publisher)
                this.publishers.push(res.data)
            } catch (err) {
                this.error = err
            }
        },

        async updatePublisher(id, updated) {
            try {
                const res = await api.put(`/publisher/${id}`, updated)
                const index = this.publishers.findIndex(p => p.id === id)
                if (index !== -1) this.publishers[index] = res.data
            } catch (err) {
                this.error = err
            }
        },

        async deletePublisher(id) {
            try {
                await api.delete(`/api/publishers/${id}`)
                this.publishers = this.publishers.filter(p => p.id !== id)
            } catch (err) {
                this.error = err
            }
        }
    }
})