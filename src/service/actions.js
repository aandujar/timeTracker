import connection from './connection';

export function getStatus() {
    return connection.$axios({
        url: ``,
        method: 'GET'
    })
}

export function clockIn() {
    return connection.$axios({
        url: `/clock-in`,
        method: 'POST'
    })
}

export function clockOut() {
    return connection.$axios({
        url: `/clock-in`,
        method: 'POST'
    })
}