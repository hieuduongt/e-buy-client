import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "./IHttpClient";
import { EBuyResponse } from "../../models/ResponseData";

export class HttpClient implements IHttpClient {
    private readonly axiosInstance: AxiosInstance;
    
    constructor() {
        this.axiosInstance = axios.create({
        
            baseURL: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "https://localhost:7299/" : "https://server.ebuy-shop.online",
            headers: {
                "Content-Type": "application/json", 
            }
        });
    }

    async get<TRes>(url: string): Promise<EBuyResponse<TRes>> {
        try {
            const response = await this.axiosInstance.get<EBuyResponse<TRes>>(url);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async post<TReq, TRes>(url: string, data?: TReq): Promise<EBuyResponse<TRes>> {
        try {
            const response = await this.axiosInstance.post<EBuyResponse<TRes>>(url, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async put<TReq, TRes>(url: string, data?: TReq): Promise<EBuyResponse<TRes>> {
        try {
            const response = await this.axiosInstance.put<EBuyResponse<TRes>>(url, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async patch<TRes>(url: string): Promise<EBuyResponse<TRes>> {
        try {
            const response = await this.axiosInstance.patch<EBuyResponse<TRes>>(url);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async delete<TRes>(url: string): Promise<EBuyResponse<TRes>> {
        try {
            const response = await this.axiosInstance.delete<EBuyResponse<TRes>>(url);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: any): void {
        // Xử lý lỗi ở đây, ví dụ như ghi log hoặc hiển thị thông báo lỗi
        console.error('HTTP Error:', error);
    }
}