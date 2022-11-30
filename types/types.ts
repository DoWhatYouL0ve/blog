type AddressContactType = {
    street: string
    suite: string
    city: string
    zipcode: string
}

export type ContactType = {
    id: string
    name: string
    email: string
    address: AddressContactType
}

export type PostType = {
    id: string
    title: string
    body: string
}

export type SocialType = {
    id: number,
    icon: string,
    path: string
}