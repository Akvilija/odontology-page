export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    license: string;
    image: string;
}

export interface Price {
    id: number;
    name: string;
    price: number;
}

export interface Service {
    id: number;
    image: string;
    name: string;
    description: string;
}