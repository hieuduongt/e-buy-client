export interface Images {
    id :string;
    url :string;
    createdDate :string;
    updatedDate:string;
    isDeleted: boolean;
    isArchived: boolean;
    isAction: boolean;
}
export interface ProductDto {
    id: string;
    name: string;
    description: string;
    quantity: number;
    originalPrice: number;
    salePrice: number;
    createdDate: string;
    updatedDate: string;
    isDeleted: boolean;
    isArchived: boolean;
    soldNumber: number;
    images :Array<Images>;
}