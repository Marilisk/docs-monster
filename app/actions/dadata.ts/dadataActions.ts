'use server'

import dadataApi from "./dadataApi"


export async function getCompany(query:string) {
    try {
        const response = await dadataApi.post('suggestions/api/4_1/rs/findById/party', {
            query,
            count: 1,
        })
        return response.data
    } catch (error) {
        console.warn(error)
        return error
    }    
}