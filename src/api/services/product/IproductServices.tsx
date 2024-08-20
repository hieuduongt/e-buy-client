import { ProductDto } from "../../../models/ProductDto";
import { EBuyResponse, Paginated } from "../../../models/ResponseData";

export interface IProductservices {
    getAll(search?: string, page?: number, pageSize?: number): Promise<EBuyResponse<Paginated<ProductDto>>>;
    get(id: string): Promise<EBuyResponse<ProductDto>>;
    create(data?: ProductDto): Promise<EBuyResponse<undefined>>;
    update(data?: ProductDto): Promise<EBuyResponse<undefined>>;
    archive(id: string): Promise<EBuyResponse<undefined>>;
    delete(id: string): Promise<EBuyResponse<undefined>>;
}