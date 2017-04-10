const util         = require('util')
const EventEmitter = require('events').EventEmitter
const fs           = require('fs')

class InputChecker extends EventEmitter {
    constructor(name, file) {
        super()
        this.name = name
        this.writeStream = fs.createWriteStream(`./${file}.txt`, {
            'flags'    : 'a',
            'encoding' : 'utf8',
            'mode'     : 0o666
        })
    }

    check(input) {
        // Trim and erase white-spaces overage
        const command = input.trim().substr(0, 3)

        // Process given command, if any
        // If wr:, write data in file
        if (command == 'wr:') {
            this.emit('write', input.substr(3, input.length))
        }
        // If en:, end application
        else if (command == 'en:') {
            this.emit('end')
        }
        // Otherwise, write standard out
        else {
            this.emit('echo', input)
        }
    }
}

// Test new object and event treatment
const ic = new InputChecker('Shelley', 'output')

ic.on('write', data => {
    ic.writeStream.write(data, 'utf8')
})

ic.on('echo', data => {
    process.stdout.write(`${ic.name} wrote ${data}`)
})

ic.on('end', () => {
    process.exit()
})

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
    const input = process.stdin.read()

    if (input !== null) {
        ic.check(input)
    }
})