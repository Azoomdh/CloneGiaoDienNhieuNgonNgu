export enum QuocGia {
	"Campuchia",
	"ThaiLand",
	"Lao",
	// …
}

export enum CacLoaiTextTrongView {
	"Text1",
	"Text2",
	// …
}

export enum CacLoaiComponentTrongView {
	"Component1",
	"Component2",
	// …
}

export abstract class ResourceLanguage<CacQuocGia, CacMuc, KieuDuLieuTraVe>{
	private map1 = new Map<CacQuocGia, Map<CacMuc, KieuDuLieuTraVe> >();

	get(cacQuocGia : CacQuocGia, cacMuc : CacMuc) : KieuDuLieuTraVe|undefined {
		if(this.map1.has(cacQuocGia)===true && this.map1.get(cacQuocGia)?.has(cacMuc)===true ){
			let ketQua = this.map1.get(cacQuocGia)?.get(cacMuc);
			return ketQua;
		}
		return undefined;
	}

	set(cacQuocGia : CacQuocGia, cacMuc : CacMuc, content : KieuDuLieuTraVe) : void {
		if(this.map1.has(cacQuocGia)===false){
			let map1_CacQuocGia = new Map<CacMuc, KieuDuLieuTraVe>();
			this.map1.set(cacQuocGia, map1_CacQuocGia);
		}

		this.map1.get(cacQuocGia)?.set(cacMuc, content);
	}
}

export class ResourceLanguage_Text extends ResourceLanguage<QuocGia, CacLoaiTextTrongView, String> {
	constructor(){
		super();

		this.set(QuocGia.Campuchia, 		CacLoaiTextTrongView.Text1, 		"Hello Cam");
		this.set(QuocGia.Lao, 				CacLoaiTextTrongView.Text1, 		"Hello Lao");
		this.set(QuocGia.ThaiLand, 			CacLoaiTextTrongView.Text1, 		"Hello Thai");

		this.set(QuocGia.Campuchia, 		CacLoaiTextTrongView.Text2, 		"Goodbye Cam");
		this.set(QuocGia.Lao, 				CacLoaiTextTrongView.Text2, 		"Goodbye Lao");
		this.set(QuocGia.ThaiLand, 			CacLoaiTextTrongView.Text2, 		"Goodbye Thai");
	}
}

export enum CacThuocTinhCss_CuaCacComponent{
	"Component1_ThuocTinh1",
	"Component1_ThuocTinh2",
	"Component2_ThuocTinh1",
	"Component2_ThuocTinh2",
	"Component3_ThuocTinh1",
	"Component3_ThuocTinh2",
}

export class ResourceLanguage_ThuocTinhCss extends ResourceLanguage<QuocGia, CacThuocTinhCss_CuaCacComponent, String>{
	constructor(){
		super();

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh1, 			"bg-sky-510 hover:bg-sky-710");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh1, 			"bg-sky-511 hover:bg-sky-711");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh1, 			"bg-sky-512 hover:bg-sky-712");

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh2, 			"bg-sky-510 hover:bg-sky-710");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh2, 			"bg-sky-511 hover:bg-sky-711");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh2, 			"bg-sky-512 hover:bg-sky-712");

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh1, 			"bg-sky-520 hover:bg-sky-720");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh1, 			"bg-sky-521 hover:bg-sky-721");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh1, 			"bg-sky-522 hover:bg-sky-722");

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh2, 			"bg-sky-520 hover:bg-sky-720");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh2, 			"bg-sky-521 hover:bg-sky-721");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component2_ThuocTinh2, 			"bg-sky-522 hover:bg-sky-722");

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh1, 			"bg-sky-520 hover:bg-sky-720");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh1, 			"bg-sky-521 hover:bg-sky-721");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh1, 			"bg-sky-522 hover:bg-sky-722");

		this.set(QuocGia.Campuchia, 		CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh2, 			"bg-sky-520 hover:bg-sky-720");
		this.set(QuocGia.Lao, 				CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh2, 			"bg-sky-521 hover:bg-sky-721");
		this.set(QuocGia.ThaiLand, 			CacThuocTinhCss_CuaCacComponent.Component3_ThuocTinh2, 			"bg-sky-522 hover:bg-sky-722");
	}
}

// test at >> https://www.typescriptlang.org/play/

let a = new ResourceLanguage_ThuocTinhCss();

let b= a.get(QuocGia.Campuchia, CacThuocTinhCss_CuaCacComponent.Component1_ThuocTinh2);

console.log(b);

