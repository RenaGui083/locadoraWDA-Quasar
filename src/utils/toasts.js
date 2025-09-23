import { Notify } from 'quasar'


//get date of table
export function getSuccess(msg = 'Dados obtidos com sucesso!') {
    Notify.create({
        type: 'positive',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'green',
        textColor: 'white',
        icon: 'check'
    })
}
export function getError(msg = 'Erro ao obter dados!') {
    Notify.create({
        type: 'negative',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'red',
        textColor: 'white',
        icon: 'error'
    })
}

// post 

export function postSuccess(msg = 'Cadastro realizado com sucesso!') {
    Notify.create({
        type: 'positive',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'green',
        textColor: 'white',
        icon: 'check'
    })
}

export function postError(msg = 'Erro ao cadastar!') {
    Notify.create({
        type: 'negative',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'red',
        textColor: 'white',
        icon: 'error'
    })
}

// put

export function putSuccess(msg = 'Edição realizada com sucesso!') {
    Notify.create({
        type: 'positive',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'green',
        textColor: 'white',
        icon: 'check'
    })
}

export function putError(msg = 'Erro ao editar!') {
    Notify.create({
        type: 'negative',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'red',
        textColor: 'white',
        icon: 'error'
    })
}

// delete

export function deleteSuccess(msg = 'Exclusão realizada com sucesso!') {
    Notify.create({
        type: 'positive',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'green',
        textColor: 'white',
        icon: 'check'
    })
}

export function deleteError(msg = 'Erro ao excluir!') {
    Notify.create({
        type: 'negative',
        message: msg,
        position: 'bottom-right',
        timeout: 3000,
        color: 'red',
        textColor: 'white',
        icon: 'error'
    })
}

