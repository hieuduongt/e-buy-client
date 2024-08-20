import { ProductDto } from "../../../models/ProductDto";
import { EBuyResponse, Paginated } from "../../../models/ResponseData";
import { HttpClient } from "../../httpservices/HttpClient";
import { IHttpClient } from "../../httpservices/IHttpClient";
import { IProductservices } from "./IproductServices";

export class ProductServices implements IProductservices {
    private readonly httpClient :IHttpClient 
    constructor() {
        this.httpClient = new HttpClient();
    }
     
     async getAll(search?: string, page?: number, pageSize?: number): Promise<EBuyResponse<Paginated<ProductDto>>> {
        if(search === undefined){
            const res = await this.httpClient.get<Paginated<ProductDto>>(`/api/product?page=${page||1}&pageSize=${pageSize||20}`);
            return res;
        }
        const res = await this.httpClient.get<Paginated<ProductDto>>(`/api/product?search=${search}&page=${page||1}&pageSize=${pageSize||20}`);
        return res;
    }
    async get(id: string): Promise<EBuyResponse<ProductDto>> {
        const res = await this.httpClient.get<ProductDto>(`/api/product/${id}`);
        return res;
    }
    async create(data?: ProductDto): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.post<ProductDto, undefined>('/api/product',data);
        return res;
    }
    async update(data?: ProductDto): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.put<ProductDto, undefined>("/api/product", data);
        return res;
    }
    async archive(id: string): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.patch<undefined>(`/api/product/${id}`);
        return res;
    }
    async delete(id: string): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.delete<undefined>(`/api/product/${id}`);
        return res;
    }

    
}