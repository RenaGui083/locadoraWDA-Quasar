import { api } from 'boot/axios'

export const authenticate = {
    login(email, password) {
    return api.post('/auth/login', { email, password })
        .then(response => {
        const token = response.data.token
        if (token) {
          localStorage.setItem('authToken', token)
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        return response.data
      })
      .catch(err => {
        console.error('Autenticação deu errado:', err)
        throw err
      })
    },

    logout() {
    localStorage.removeItem('authToken')
    delete api.defaults.headers.common['Authorization']
    window.location.href = '/'
    }
}

