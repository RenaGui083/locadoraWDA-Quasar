import { api } from 'boot/axios'
import { defineStore } from 'pinia'
import { successMsg, errorMsg } from 'src/utils/toasts'
import { i18n } from 'boot/i18n'

export const useBookStore = defineStore('book', {
    state: () => ({
        books: [],
        fetchBooksTable: [],
        loading: false,
        error: null
    }),

    actions: {
        fetchBooks() {
            this.loading = true
            this.error = null

            return api.get('/book')
                .then(response => {
                    this.books = response.data

                    this.fetchBooksTable = response.data.map(book => ({
                        ...book,
                        name: book.name,
                        publisher: book.publisher.name,
                        author: book.author,
                        launchDate: book.launchDate,
                        totalQuantity: book.totalQuantity,
                        totalInUse: book.totalInUse
                    }))
                    console.log('Rents fetched:', this.rents);
                })
                .catch(e => {
                    console.error('Erro:', e.response?.data || e.message);
                    errorMsg(i18n.global.t('toasts.error.getError'));
                })
                .finally(() => {
                    this.loading = false
                })
        },

        addBooks(books) {
            return api.post('/book', books)
                .then(response => {
                    this.books.push(response.data)
                    successMsg(i18n.global.t('toasts.success.postSuccess'))
                    return true
                })
                .catch(error => {
                    errorMsg(i18n.global.t('toasts.error.postError'));
                    console.error('Erro:', error.response?.data || error.message);
                    return false
                })
        },

        updateBook(id, updated) {
            return api.put(`/book/${id}`, updated)
                .then(response => {
                    const index = this.books.findIndex(b => b.id === id)
                    if (index !== -1) this.books[index] = response.data
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

        deleteBook(id) {
            return api.delete(`/book/${id}`)
                .then(() => {
                    this.books = this.books.filter(b => b.id !== id)
                    successMsg(i18n.global.t('toasts.success.deleteSuccess'))
                })
                .catch(error => {
                    const msg = error.response?.data?.error || error.message;
                    console.error('Erro:', msg);
                    errorMsg(i18n.global.t('toasts.error.deleteErrorPublishers'));
                })
        }
    }
})