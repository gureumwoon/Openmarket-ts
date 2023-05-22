export interface UserLogin {
    username: string,
    password: string,
    login_type: string
}

export interface UserSignUp {
    username: string;
    password: string;
    password2: string;
    phone_number: string;
    name: string;
}