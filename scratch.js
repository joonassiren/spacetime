const spacetime = require('./src/index')

// bug 1: roll-forward
// let d = spacetime('2020-03-08T00:31:01', 'America/Chicago')
// d = d.add(30, 'minutes')
// console.log(d.format('nice'))

// let d = spacetime([], 'America/Chicago')
// console.log(d.format('{nice} {year}'))

// d = spacetime({}, 'America/Chicago')
// console.log(d.format('{nice} {year}'))

let s = spacetime(null, '12h')
console.log(s.timezone())
