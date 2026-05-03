/*
(GPT) trong TS có hỗ trợ cách này không 
tôi tạo map<EnumQuocGia, Class> 
tôi chọn class1 = map.get(EnumQuocGia.Vi) 
sau đó tôi tạo đối tượng class1 mới

// (trả lời) có nhưng phiền
*/

import { QuocGia, ResourceLanguage } from "./Untitled-2";

export enum CacLoaiComponent {
    Component1,
    Component2,
    // ...
}

export abstract class Abstract_Component {

}

// *************************

export abstract class Abstract_Component1 extends Abstract_Component {
	thuocTinh1 : string;
	thuocTinh2 : string;

	constructor(thuocTinh1 : string, thuocTinh2 : string ){
        super();
		this.thuocTinh1 = thuocTinh1;
		this.thuocTinh2 = thuocTinh2;
	}
}

export class Component1Thai extends Abstract_Component1 {

	constructor(thuocTinh1 : string, thuocTinh2 : string){
		super(thuocTinh1, thuocTinh2 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string ) : Abstract_Component1 {
		return new Component1Thai(thuocTinh1, thuocTinh2);
	}
}

export class Component1Lao extends Abstract_Component1 {

	constructor(thuocTinh1 : string, thuocTinh2 : string){
		super(thuocTinh1, thuocTinh2 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string ) : Abstract_Component1 {
		return new Component1Lao(thuocTinh1, thuocTinh2);
	}
}

export class Component1Cam extends Abstract_Component1 {

	constructor(thuocTinh1 : string, thuocTinh2 : string){
		super(thuocTinh1, thuocTinh2 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string ) : Abstract_Component1 {
		return new Component1Cam(thuocTinh1, thuocTinh2);
	}
}

// ***************************

export abstract class Abstract_Component2 extends Abstract_Component {
	thuocTinh1 : string;
	thuocTinh2 : string;
    thuocTinh3 : string;

	constructor(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string ){
        super();
		this.thuocTinh1 = thuocTinh1;
		this.thuocTinh2 = thuocTinh2;
        this.thuocTinh3 = thuocTinh3;
	}
}

export class Component2Thai extends Abstract_Component2 {

	constructor(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string){
		super(thuocTinh1, thuocTinh2, thuocTinh3 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string ) : Abstract_Component2 {
		return new Component2Thai(thuocTinh1, thuocTinh2, thuocTinh3);
	}
}

export class Component2Lao extends Abstract_Component2 {

	constructor(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string){
		super(thuocTinh1, thuocTinh2, thuocTinh3 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string ) : Abstract_Component2 {
		return new Component2Lao(thuocTinh1, thuocTinh2, thuocTinh3);
	}
}

export class Component2Cam extends Abstract_Component2 {

	constructor(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string){
		super(thuocTinh1, thuocTinh2, thuocTinh3 );
		// ...
	}

	public static getNewObject(thuocTinh1 : string, thuocTinh2 : string, thuocTinh3 : string ) : Abstract_Component2 {
		return new Component2Cam(thuocTinh1, thuocTinh2, thuocTinh3);
	}
}

// ********************************


export class LanguageResource_Component extends ResourceLanguage<QuocGia, CacLoaiComponent, Function >{

    constructor(){
        super();

        this.set(QuocGia.Campuchia,         CacLoaiComponent.Component1,            Component1Cam.getNewObject);
        this.set(QuocGia.Lao,               CacLoaiComponent.Component1,            Component1Lao.getNewObject);
        this.set(QuocGia.ThaiLand,          CacLoaiComponent.Component1,            Component1Thai.getNewObject);

        this.set(QuocGia.Campuchia,         CacLoaiComponent.Component2,            Component2Cam.getNewObject);
        this.set(QuocGia.Lao,               CacLoaiComponent.Component2,            Component2Lao.getNewObject);
        this.set(QuocGia.ThaiLand,          CacLoaiComponent.Component2,            Component2Thai.getNewObject);
    }
}