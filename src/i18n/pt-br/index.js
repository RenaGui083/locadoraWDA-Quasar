

export default {
    login: {
        bookRental: 'Locadora de Livros',
        welcome: 'Bem-vindo(a) de volta!',
        title: 'Login',
        email: 'Email',
        password: 'Senha',
        button: 'Entrar',
        forgotPassword: 'Esqueceu a senha?',
        hints: {
            email: "Email do usuário",
            password: "Senha do usuário",
            errorEmail: "Por favor insira seu email",
            errorPassword: "Por favor insira sua senha",
            alert: "Algo deu errado..."
        }
    },


    forgotPassword: {
        bookRental: 'Locadora de Livros',
        forgotPasswordTitle: 'Esqueceu a senha?',
        title: "Recuperar senha",
        email: "Email",
        button: "Continuar",
        buttonBack: "Voltar"
    },


    sideBar: {
        dashboard: "Dashboard",
        library: "Biblioteca",
        rents: "Aluguéis",
        users: "Usuários",
        renters: "Locatários",
        publishers: "Editoras",
        logout: "Sair",
        header: "Locadora de Livros"
    },


    dashboard: {
        headerTitle: "Dashboard",
        rentsChart: "Aluguéis (mensal)",
        top3Chart: "Top 3 livros mais alugados",
        publishersBooksRenters: "Editoras, livros e locatários cadastrados",
        numberOfUsers: "Número de usuários:",
        numberOfAdmins: "Número de administradores:",
        chart: {
            rented: "Alugados",
            late: "Atrasados",
            onTime: "Devolvidos no prazo",
            returnedLate: "Devolvidos com atraso",
            publishers: "Editoras",
            books: "Livros",
            renters: "Locatários"
        },
        table: {
            tableTitle: "Relatório de locatários",
            renters: "Locatários",
            rentsQuantity: "Total de aluguéis",
            rentsActive: "Aluguéis ativos",
        }
    },


    tables: {
        noData: "Sem registros disponíveis...",
        rowsPerPage: "Linhas por página",
        of: "de",
        loading: "Carregando..."
    },


    library: {
        headerTitle: "Biblioteca",
        table: {
            tableTitle: "Acervo atual",
            name: "Nome",
            author: "Autor",
            launchDate: "Data de lançamento",
            totalQuantity: "Estoque",
            totalInUse: "Alugados",
            publisher: "Editora",
            actions: "Ações"
        },
        createModal: {
            title: "Cadastrar Livro",
            name: "Nome",
            author: "Autor",
            totalQuantity: "Estoque",
            publisher: "Editora",
            launchDate: "Data de lançamento",
            registerButton: "Cadastrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Livro",
            name: "Nome",
            author: "Autor",
            totalQuantity: "Estoque",
            publisher: "Editora",
            launchDate: "Data de lançamento",
            registerButton: "Salvar",
            cancelButton: "Cancelar",
        },
    },


    search: {
        searchBar: "Pesquisar",
        createButton: " + Criar"
    },


    rents: {
        headerTitle: "Aluguéis",
        table: {
            tableTitle: "Relação de aluguéis",
            book: "Livro",
            renter: "Locatário",
            rentDate: "Data de locação",
            deadLine: "Data de devolução",
            status: "Status",
            actions: "Ações"
        },
        createModal: {
            title: "Cadastrar Aluguel",
            book: "Livro",
            renter: "Locatário",
            deadLine: "Data de devolução",
            registerButton: "Cadastrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Aluguel",
            book: "Livro",
            renter: "Locatário",
            deadLine: "Data de devolução",
            registerButton: "Atualizar",
            cancelButton: "Cancelar",
            returnModal: {
                yesButton: "Sim",
                noButton: "Não",
                text: "Você tem certeza de que deseja realizar a devolução? ",
            }
        },
    },


    users: {
        headerTitle: "Usuários",
        table: {
            tableTitle: "Relação de Usuários",
            name: "Nome",
            email: "Email",
            role: "Nível de acesso",
            actions: "Ações"
        },
        createModal: {
            title: "Cadastrar Usuário",
            name: "Nome",
            email: "Email",
            password: "Senha",
            admin: "Administrador",
            user: "Usuário",
            registerButton: "Cadastrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Usuário",
            name: "Nome",
            email: "Email",
            password: "Senha",
            admin: "Administrador",
            user: "Usuário",
            registerButton: "Atualizar",
            cancelButton: "Cancelar"
        },
        viewModal: {
            title: "Detalhes do Usuário",
            id: "ID",
            name: "Nome",
            email: "Email",
            password: "Senha",
            role: "Nível de acesso",
            cancelButton: "Fechar"
        }
    },


    excludeModal: {
        text: "Você tem certeza de que deseja realizar a exclusão?",
        yesButton: "Sim",
        noButton: "Não"
    },


    confirmModal: {
        yesButton: "Sim",
        noButton: "Não",
        text: "Você tem certeza de que deseja realizar a edição?",
    },


    renters: {
        headerTitle: "Locatários",
        table: {
            tableTitle: "Relação de Locatários",
            name: "Nome",
            email: "Email",
            telephone: "Telefone",
            address: "Endereço",
            cpf: "CPF",
            actions: "Ações"
        },
        createModal: {
            title: "Cadastrar Locatário",
            name: "Nome",
            email: "Email",
            telephone: "Telefone",
            cpf: "CPF",
            address: "Endereço",
            registerButton: "Cadastrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Locatário",
            name: "Nome",
            email: "Email",
            telephone: "Telefone",
            cpf: "CPF",
            address: "Endereço",
            registerButton: "Atualizar",
            cancelButton: "Cancelar",
        },
        viewModal: {
            title: "Detalhes do Locatário",
            id: "ID",
            name: "Nome",
            email: "Email",
            telephone: "Telefone",
            cpf: "CPF",
            address: "Endereço",
            cancelButton: "Fechar"
        }
    },

    publishers: {
        headerTitle: "Editoras",
        table: {
            tableTitle: "Relação de Editoras",
            name: "Nome",
            email: "Email",
            telephone: "Telefone",
            site: "Site",
            actions: "Ações"
        },
        createModal: {
            title: "Cadastrar Editora",
            name: "Nome*",
            email: "Email*",
            telephone: "Telefone*",
            site: "Site",
            registerButton: "Cadastrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Editora",
            name: "Nome*",
            email: "Email*",
            telephone: "Telefone*",
            site: "Site",
            registerButton: "Atualizar",
            cancelButton: "Cancelar",
        },
        errorInput: {
            name: "O nome é obrigatório",
            email: "O email é obrigatório",
            telephone: "O telefone é obrigatório",
            invalidEmail: "Email inválido",
            invalidTelephone: "Telefone inválido",
            invalidSite: "Site inválido"
        } 
    },
    errorDuplicate: "Este campo já existe. Por favor, utilize um valor diferente.",
    roleUser: "Usuário",
    roleAdmin: "Administrador",
    avatarButton: "Mudar Avatar",

    toasts: {
        success: {
            postSuccess: "Cadastro realizado com sucesso!",
            deleteSuccess: "Exclusão realizada com sucesso!",
            putSuccess: "Atualização realizada com sucesso!"
        },
        error: {
            getError: "Erro ao obter os dados!",
            postError: "Erro ao realizar cadastro! Verifique se não há campos duplicados.",
            deleteError: "Erro ao realizar exclusão! Verifique se não existem livros vinculados.",
            putError: "Erro ao realizar atualização! Verifique se não há campos duplicados.",
            postErrorCpf: "Erro ao realizar cadastro! Verifique se o CPF é válido.",
        }
    },
}