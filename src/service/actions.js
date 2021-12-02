import connection from './connection';

export function getStatus() {
    return connection.$axios({
        url: ``,
        method: 'GET'
    })
}

export function clockIn(data) {
    return connection.$axios({
        url: `/clock-in`,
        method: 'POST',
        data: data
    })
}

export function clockOut() {
    return connection.$axios({
        url: `/clock-in`,
        method: 'POST',
        data: data
    })
}