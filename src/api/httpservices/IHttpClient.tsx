import { EBuyResponse } from '../../models/ResponseData';

export interface IHttpClient {
    get<TRes>(url: string): Promise<EBuyResponse<TRes>>;
    post<TReq, TRes>(url: string, data?: TReq): Promise<EBuyResponse<TRes>>;
    put<TReq, TRes>(url: string, data?: TReq): Promise<EBuyResponse<TRes>>;
    patch<TRes>(url: string): Promise<EBuyResponse<TRes>>;
    delete<TRes>(url: string): Promise<EBuyResponse<TRes>>;
}