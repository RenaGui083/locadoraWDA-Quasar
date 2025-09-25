export default {
    login: {
        bookRental: "Alquiler de libros",
        welcome: 'Bienvenido de nuevo',
        title: 'Acceso',
        email: 'Correo electrónico',
        password: 'Contraseña',
        button: 'Entrada',
        forgotPassword: '¿Olvidaste tu contraseña?',
        hints: {
            email: "Correo electrónico del usuario",
            password: "Contraseña del usuario",
            errorEmail: "Por favor ingrese su correo electrónico",
            errorPassword: "Por favor ingrese su contraseña",
            alert: "Algo salió mal..."
        }
    },

    forgotPassword: {
        bookRental: 'Alquiler de libros',
        forgotPasswordTitle: '¿Olvidaste tu contraseña?',
        title: "Recuperar contraseña",
        email: "Correo electrónico",
        button: "Continuar",
        buttonBack: "Volver"
    },

    sideBar: {
        dashboard: "Panel de Control",
        library: "Biblioteca",
        rents: "Alquileres",
        users: "Usuarios",
        renters: "Arrendatarios",
        publishers: "Editoriales",
        logout: "Cerrar sesión",
        header: "Alquiler de libros"
    },

    dashboard: {
        headerTitle: "Panel de Control",
        rentsChart: "Datos de alquiler por mes",
        top3Chart: "Top 3 libros más alquilados",
        publishersBooksRenters: "Editoriales, libros y arrendatarios registrados",
        numberOfUsers: "Número de usuarios:",
        numberOfAdmins: "Número de administradores:",
        chart: {
            rented: "Alquilados",
            late: "Atrasados",
            onTime: "Devuelto a tiempo",
            returnedLate: "Devuelto con demora",
            publishers: "Editoriales",
            books: "Libros",
            renters: "Arrendatarios"
        },
        table: {
            tableTitle: "Informe de arrendatarios",
            renters: "Arrendatarios",
            rentsQuantity: "Cantidad de alquileres",
            rentsActive: "Alquileres activos",
        }
    },

    tables: {
        noData: "Sin registros disponibles...",
        rowsPerPage: "filas por página",
        of: "de",
        loading: "Cargando..."
    },

    library: {
        headerTitle: "Biblioteca",
        table: {
            tableTitle: "Colección actual",
            name: "Nombre",
            author: "Autor",
            launchDate: "lanzamiento",
            totalQuantity: "Inventario",
            totalInUse: "Alquilados",
            publisher: "Editorial",
            actions: "Acciones"
        },
        createModal: {
            title: "Registrar Libro",
            name: "Nombre",
            author: "Autor",
            totalQuantity: "Inventário",
            publisher: "Editorial",
            launchDate: "Lanzamiento",
            registerButton: "Registrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Libro",
            name: "Nombre",
            author: "Autor",
            totalQuantity: "Inventario",
            publisher: "Editorial",
            launchDate: "Lanzamiento",
            registerButton: "Guardar",
            cancelButton: "Cancelar",
        },
    },

    search: {
        searchBar: "Buscar",
        createButton: " + Crear"
    },

    rents: {
        headerTitle: "Alquileres",
        table: {
            tableTitle: "Lista de alquileres",
            book: "Libro",
            renter: "Arrendatario",
            rentDate: "Fecha de alquiler",
            deadLine: "Fecha de devolución",
            status: "Estado",
            actions: "Acciones"
        },
        createModal: {
            title: "Crear alquiler",
            book: "Libro",
            renter: "Arrendatario",
            deadLine: "Fecha de devolución",
            registerButton: "Crear",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar alquiler",
            book: "Libro",
            renter: "Arrendatario",
            deadLine: "Fecha de devolución",
            registerButton: "Guardar",
            cancelButton: "Cancelar",
            returnModal: {
                yesButton: "Sí",
                noButton: "No",
                text: "¿Estás seguro de que deseas realizar la devolución?",
            }
        },
    },
    users: {
        headerTitle: "Usuarios",
        table: {
            tableTitle: "Relación de Usuarios",
            name: "Nombre",
            email: "Correo electrónico",
            role: "Nivel de acceso",
            actions: "Acciones"
        },
        createModal: {
            title: "Registrar Usuario",
            name: "Nombre",
            email: "Correo electrónico",
            password: "Contraseña",
            admin: "Administrador",
            user: "Usuario",
            registerButton: "Registrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar Usuario",
            name: "Nombre",
            email: "Correo electrónico",
            password: "Contraseña",
            admin: "Administrador",
            user: "Usuario",
            registerButton: "Guardar",
            cancelButton: "Cancelar",
            confirmModal: {
                yesButton: "Sí",
                noButton: "No",
                text: "¿Está seguro de que desea realizar la edición?",
            }
        },
        viewModal: {
            title: "Detalles del Usuario",
            id: "ID",
            name: "Nombre",
            email: "Correo electrónico",
            password: "Contraseña",
            role: "Nivel de acceso",
            cancelButton: "Hecho"
        }
    },
    excludeModal: {
        text: "¿Está seguro de que desea eliminar esto?",
        yesButton: "Sí",
        noButton: "No"
    },
    confirmModal: {
        yesButton: "Sí",
        noButton: "No",
        text: "¿Está seguro de que desea editar esto?",
    },


    renters: {
        headerTitle: "Arrendatarios",
        table: {
            tableTitle: "Lista de arrendatarios",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            address: "Dirección",
            cpf: "CPF",
            actions: "Acciones"
        },
        createModal: {
            title: "Registrar arrendatario",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            cpf: "CPF",
            address: "Dirección",
            registerButton: "Registrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar arrendatario",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            cpf: "CPF",
            address: "Dirección",
            registerButton: "Guardar",
            cancelButton: "Cancelar",
        },
        viewModal: {
            title: "Detalles del arrendatario",
            id: "ID",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            cpf: "CPF",
            address: "Dirección",
            cancelButton: "Hecho"
        }
    },


    publishers: {
        headerTitle: "Editoriales",
        table: {
            tableTitle: "Lista de editoriales",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            site: "Sitio web",
            actions: "Acciones"
        },
        createModal: {
            title: "Registrar editorial",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            site: "Sitio web",
            registerButton: "Registrar",
            cancelButton: "Cancelar"
        },
        editModal: {
            title: "Editar editorial",
            name: "Nombre",
            email: "Correo electrónico",
            telephone: "Teléfono",
            site: "Sitio web",
            registerButton: "Actualizar",
            cancelButton: "Cancelar",
        }
    },

    roleUser: "Usuario",
    roleAdmin: "Administrador",
    avatarButton: "Establecer avatar",
}