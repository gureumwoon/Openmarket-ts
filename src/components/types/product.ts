export interface Product {
    product_id: number;
    product_name: string;
    seller: number;
    seller_store: string;
    image: string;
    price: number;
    shipping_method: string;
    shipping_fee: number;
    stock: number;
    products_info: string;
}

export interface ProductDetail {
    created_at: string;
    product_id: number;
    updated_at: string;
    product_name: string;
    image: string;
    price: number;
    shipping_method: string;
    shipping_fee: number;
    stock: number;
    products_info: string;
    seller: number;
    store_name: string;
}

// export interface UploadProduct {
//     product_name: string,
//     image: string,
//     price: number,
//     shipping_method: string,
//     shipping_fee: number,
//     stock: number,
//     products_info: string,
//     token: string
// }

// export interface ModifyProduct {
//     product_name: string,
//     image: string,
//     price: number,
//     shipping_method: string,
//     shipping_fee: number,
//     stock: number,
//     products_info: string,
// }

// cart

export interface AddCart {
    product_id: number;
    quantity: number;
    check: boolean;
}

export interface ModifyCartQuantity {
    product_id: number;
    quantity: number;
    is_active: boolean;
}

export interface CartDetail {
    my_cart: number;
    cart_item_id: number;
    product_id: number;
    quantity: number;
    is_active?: boolean;
}