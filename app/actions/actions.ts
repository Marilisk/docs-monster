'use server'

import { IGetCaseResponse } from "../common/types/types";
import api, { apiUrl } from "./api";


export async function getCaseInfo(caseNumber: string):Promise<IGetCaseResponse> {
    try {
        const response = await api.post('/parser/case', { caseNumber: caseNumber })
        console.log('getCaseInfo **********', response.data)
        return response.data
    } catch (error) {
        console.warn('eeeeeeeeeeeeeeeeeeeeeeerror', error)
        return {result: null, status: 'error', message: 'Не удалось получить дело. Проверьте сетевое подключение'}
    }
}


export async function testNextFetch(caseNumber: string) {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Accept-Language': 'ru,en-US;q=0.9,en;q=0.8,ru-RU;q=0.7', 
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
        },
        body: JSON.stringify({ caseNumber: caseNumber })
    };

    const response = await fetch(`${apiUrl}/parser/testnext`, options)
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));

    return response
}

