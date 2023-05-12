export interface UploadProduct {
    product_name: string,
    image: string,
    price: number,
    shipping_method: string,
    shipping_fee: number,
    stock: number,
    products_info: string,
}

export interface ModifyProduct {
    product_name: string,
    image: string,
    price: number,
    shipping_method: string,
    shipping_fee: number,
    stock: number,
    products_info: string,
}


// cart

export interface AddCart {
    product_id: number,
    quantity: number,
    check: boolean
}

export interface ModifyCartQuantity {
    product_id: number,
    quantity: number,
    is_active: boolean
}