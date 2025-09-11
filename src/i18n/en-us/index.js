
export default {
    login: {
        bookRental: 'Book rental',
        welcome: 'Welcome Back!',
        title: "Login",
        email: "Email",
        password: "Password",
        button: "Login",
        forgotPassword: "Forgot password?"
    },
    forgotPassword: {
        bookRental: 'Book rental',
        forgotPasswordTitle: 'Forgot password?',
        title: "Recover password",
        email: "Email",
        button: "Continue",
        buttonBack: "Back"
    },
    sideBar: {
        dashboard: "Dashboard",
        library: "Library",
        rents: "Rents",
        users: "Users",
        renters: "Renters",
        publishers: "Publishers",
        logout: "Logout",
        header: "Book rental"
    },
    dashboard: {
        headerTitle: "Dashboard",
        rentsChart: "Rental data by month",
        top3Chart: "Top 3 Most Rented Books",
        publishersBooksRenters: "Publishers, books and renters registered",
        numberOfUsers: "Number of users:",
        numberOfAdmins: "Number of admins:",
        chart: {
            rented: "Rented",
            late: "Late",
            onTime: "Returned on time",
            returnedLate: "Returned late",
            publishers: "Publishers",
            books: "Books",
            renters: "Renters"
        },
        table: {
            tableTitle: "Renters report",
            renters: "Renters",
            rentsQuantity: "Rents quantity",
            rentsActive: "Rents active",
        }
    },

    tables: {
        noData: "No data available...",
        rowsPerPage: "Rows per page",
        of: "of"
    },

    library: {
        headerTitle: "Library",
        table: {
            tableTitle: "Current Collection",
            name: "Name",
            author: "Author",
            launchDate: "Launch Date",
            totalQuantity: "Stock",
            totalInUse: "Rented",
            publisher: "Publisher",
            actions: "Actions"
        },
        createModal: {
            title: "Register Book",
            name: "Name",
            author: "Author",
            totalQuantity: "Stock",
            publisher: "Publisher",
            launchDate: "Launch date",
            registerButton: "Register",
            cancelButton: "Cancel"
        },
        editModal: {
            title: "Edit Book",
            name: "Name",
            author: "Author",
            totalQuantity: "Stock",
            publisher: "Publisher",
            launchDate: "Launch date",
            registerButton: "Save",
            cancelButton: "Cancel"
        },
        excludeModal: {
            text: "Are you sure you want to delete this?",
            yesButton: "Yes",
            noButton: "No"
        }
    },

    search: {
        searchBar: "Search",
        createButton: " + Create"
    },

    rents: {
        headerTitle: "Rents",
        table: {
            tableTitle: "Rental list",
            book: "Book",
            renter: "Renter",
            rentDate: "Rent date",
            deadLine: "Dead line",
            status: "Status",
            actions: "Actions"
        },
        createModal: {
            title: "Create rental",
            book: "Book",
            renter: "Renter",
            deadLine: "Dead line",
            registerButton: "Create",
            cancelButton: "Cancel"
        },
        editModal: {
            title: "Edit rental",
            book: "Book",
            renter: "Renter",
            deadLine: "Dead line",
            registerButton: "Save",
            cancelButton: "Cancel"
        },
        excludeModal: {
            text: "Are you sure you want to delete this?",
            yesButton: "Yes",
            noButton: "No"
        }
    },
}