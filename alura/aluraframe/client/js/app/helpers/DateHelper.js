class DateHelper {
    static dateToString(date) {
        if (!date instanceof Date)
            throw new TypeError('This method param must be an instance of Date')
        
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    static stringToDate(string) {
        if (!typeof string == 'string')
            throw new TypeError('This method must receive a string as a parameter')

        if (/\d{4}-\d{2}-\d{2}/.test(string))
            return new Date(...string.split('-').map((item, index) => item - index % 2))
        
        if (/\d{2}(\/|-)\d{2}(\/|-)\d{4}/.test(string))
            return new Date(...string.split(/(\/|-)/).map((item, index) => item - index % 2))
        
        throw new StringFormatError('The given string isn\'t a valid date string format')
    }
}