const HttpError = require('../errors/httpError')
const booksModel = require('../models/booksModel')

const uuid = require('uuid').v4

const loans = [
  {
    id: '1',
    userId: '1',
    bookId: '1',
    loanDate: new Date('2024-01-01'),
    returnDate: null,
    isReturned: false,
    isLate: true
  },
]

module.exports = {
    getAllLoans: () => loans,
    
    getLoanById: (id) => loans.find( loan => loan.id === id),

    createLoan: (user, book) => {
        if(book.quantityAvailable < 1) throw new HttpError(400, "Não há exemplares dispoíveis.")

        const today = new Date()
        const returnDate = new Date()

        //data de retorno para daqui 14 dias
        returnDate.setDate(today.getDate() + 14)

        const newLoan = {
            id: uuid(),
            userId: user.id,
            bookId: book.id,
            loanDate: today,
            returnDate: returnDate,
            isReturned: false,
            isLate: false
        }

        loans.push(newLoan)
        booksModel.takeBook(book.id)

        return newLoan
    },

    returnLoan: (id) => {
        const loanIndex = loans.findIndex(loan => loan.id === id)

        if(loanIndex === -1) throw new HttpError(404, "Emprestimo não encontrado!")

        const loan = loans[loanIndex]

        // se o livro já foi retornado, OK.
        if (loan.isReturned) return null

        loan.isReturned = true
        const today = new Date()
        const limitDate = new Date(loan.returnDate)

        // se a data de hoje é maior que a data limite, está atrasado.
        loan.isLate = today > limitDate
        loan.returnDate = today
        
        booksModel.returnBook(loan.bookId)
        return loan
    }
}