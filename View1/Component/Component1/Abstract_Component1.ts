import { IsComponent } from "../Abstract_Component";

export class Abstract_Component1 implements IsComponent {
    
    thuocTinh1;
    thuocTinh2;
    thuocTinh3;
    
    constructor(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string){
        // super();

        this.thuocTinh1 = thuocTinh1;
        this.thuocTinh2 = thuocTinh2;
        this.thuocTinh3 = thuocTinh3;
    }

    static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string) : Abstract_Component1 {
        throw new Error("phải override lại hàm này");
    }
}