class StringFormatError extends Error{
    constructor(message = 'Invalid string format') {
        super(message)
        this.name    = 'StringFormatError'
        this.message = message
        this.stack   = (new Error(message)).stack
    }
}