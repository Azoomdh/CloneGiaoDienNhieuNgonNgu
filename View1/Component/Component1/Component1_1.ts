import { Abstract_Component1 } from "./Abstract_Component1";

// @Component với template khác
export class Component1_1 extends Abstract_Component1 {
    
    static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string) : Abstract_Component1 {
        return new Component1_1(thuocTinh1, thuocTinh2, thuocTinh3);
    }
}