import { dateFormat } from '../constants/DateFormat'
import moment from 'moment'

export function retrieveDate(date) {
    return (
        moment(date).format(dateFormat)
    )
}
