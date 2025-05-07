/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

interface APIOptions extends AxiosRequestConfig {
    url: string | undefined
    method: string | undefined
    data?: unknown
}

const onSuccess = (response: AxiosResponse): unknown => {
    return { ...response?.data, status: response?.status }
}

const onError = (error: AxiosError): any => {
    if (error?.code === 'ERR_NETWORK') {
        throw error
    }
    throw error?.response?.data
}
export function apiRequest({ ...options }: APIOptions): Promise<any> {
    const client: AxiosInstance = axios.create({ baseURL: baseURL })
    client.defaults.headers.common = {
        'Content-Type': 'application/json'
    }
    return client(options).then(onSuccess).catch(onError)
}
