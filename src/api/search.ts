import instance from "./config";

export const apiGet = (value: any) => {
    return instance.get(`/products?name=${value}`)
}