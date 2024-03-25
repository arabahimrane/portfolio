import { Visites } from "./dataVisites";
import { Device } from "./device";
import { SessionData } from "./sessionData";

export interface ServeurData{
    deviceData: Device[],
    visitesData: Visites[],
    sessionData: SessionData[],
        
}