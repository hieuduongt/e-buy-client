import { CategoryDto } from "../../../models/CategoryDto";
import { EBuyResponse, Paginated } from "../../../models/ResponseData";

export interface ICategoryServies {
    getAll(search?: string, page?: number, pageSize?: number): Promise<EBuyResponse<Paginated<CategoryDto>>>;
    get(id: string): Promise<EBuyResponse<CategoryDto>>;
    create(data?: CategoryDto): Promise<EBuyResponse<undefined>>;
    update(data?: CategoryDto): Promise<EBuyResponse<undefined>>;
    archive(id: string): Promise<EBuyResponse<undefined>>;
    delete(id: string): Promise<EBuyResponse<undefined>>;
}