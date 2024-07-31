export interface EBuyResponse<T> {
    code: number;
    messages: Array<string>;
    isSuccess: boolean;
    result?: T
}

export interface Paginated<T> {
    page: number;
    pageSize: number;
    totalPages: number;
    items: Array<T>;
}