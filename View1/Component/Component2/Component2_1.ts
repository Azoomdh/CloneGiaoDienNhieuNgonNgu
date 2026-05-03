import { Abstract_Component2 } from "./Abstract_Component2";

// @Component với template khác
export class Component2_1 extends Abstract_Component2 {
    
    static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string) : Abstract_Component2 {
        return new Component2_1(thuocTinh1, thuocTinh2, thuocTinh3);
    }
}