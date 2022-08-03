import instance from "./config";

export const CategoryGetAll = () => {
    return instance.get("/categories")
}

export const CategoryGetId = (id: any)=>{
    return instance.get(`/categories/${id}`)
}