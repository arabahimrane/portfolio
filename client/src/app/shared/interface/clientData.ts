import { NumberInput } from "@angular/cdk/coercion";
import { Clients } from "./client";

export interface ClientsData{
    clients: Clients[] | null,
    currentPage: NumberInput,
    totalePage: NumberInput ,
    clientsLength: NumberInput,
}