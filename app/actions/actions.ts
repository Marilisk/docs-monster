'use server'

import { IGetCaseResponse } from "../common/types/types";
import api, { apiUrl } from "./api";


export async function getCaseInfo(caseNumber: string):Promise<IGetCaseResponse> {
    try {
        const response = await api.post('/parser/case', { caseNumber: caseNumber })
        return response.data
    } catch (error) {
        console.warn(error)
        return {result: null, status: 'error', message: 'Не удалось получить дело. Проверьте сетевое подключение'}
    }
}



