export interface AccountInfo {
    email: string,
    password: string
}

export interface UserInfo {
    id: number,
    name: string,
}

export interface Master {
    id: number,
    name: string,
}

export interface Budget {
    id: number,
    money: number,
    date: string,
    detail: string,
    master: Master,
    exOrIn: number
}