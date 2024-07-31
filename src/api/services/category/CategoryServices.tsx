import { CategoryDto } from "../../../models/CategoryDto";
import { EBuyResponse, Paginated } from "../../../models/ResponseData";
import { HttpClient } from "../../httpservices/HttpClient";
import { IHttpClient } from "../../httpservices/IHttpClient";
import { ICategoryServies } from "./ICategoryServices";

export class CategoryServices implements ICategoryServies {
    private readonly httpClient: IHttpClient;
    constructor() {
        this.httpClient = new HttpClient();
    }

    async getAll(search?: string, page?: number, pageSize?: number): Promise<EBuyResponse<Paginated<CategoryDto>>> {
        const res = await this.httpClient.get<Paginated<CategoryDto>>(`/api/category?search=${search||""}&page=${page||1}&pageSize=${pageSize||20}`);
        return res;
    }

    async get(id: string): Promise<EBuyResponse<CategoryDto>> {
        const res = await this.httpClient.get<CategoryDto>(`/api/category/${id}`);
        return res;
    }

    async create(data?: CategoryDto): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.post<CategoryDto, undefined>("/api/category", data);
        return res;
    }

    async update(data?: CategoryDto): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.put<CategoryDto, undefined>("/api/category", data);
        return res;
    }

    async archive(id: string): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.patch<undefined>(`/api/category/${id}`);
        return res;
    }

    async delete(id: string): Promise<EBuyResponse<undefined>> {
        const res = await this.httpClient.delete<undefined>(`/api/category/${id}`);
        return res;
    }
}