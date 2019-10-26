import { Client } from '../client';

export const LIST_KEYNOTES = 'LIST_KEYNOTES';

export function fetchKeynotes () {
    const payload = Client.get('/keynote');
    return {
        type: LIST_KEYNOTES,
        payload
    }
}