// class

enum QuocGia {
	Cam,
	Thai,
	Lao,
	// …
}

enum CacLoaiTextTrongView {
	Text1,
	Text2,
	// …
}

enum CacLoaiComponentTrongView {
	Component1,
	Component2,
	// …
}

// mỗi component 1 css chung

class LanguageResourceText {
	map1 : Map< QuocGia, Map<CacLoaiTextTrongView, String> >;

	private addToMap1(cacLoaiTextTrongView : CacLoaiTextTrongView, quocGia : QuocGia, content : String){
		// chắc chắn đã có đủ quốc gia nên không cần check

		if(this.map1.has(quocGia)===true && this.map1.get(quocGia)?.has(cacLoaiTextTrongView)===true ){
			this.map1.get(quocGia)?.set(cacLoaiTextTrongView, content);
		}

		return;
	}
	private initMap1(){

		for(let qg1 of Object.values(QuocGia) ){
			let map1_QuocGia1 = new Map<CacLoaiTextTrongView, String>();

			for(let text1 of Object.values(CacLoaiTextTrongView) ){
				let text1A = text1 as CacLoaiTextTrongView;
				map1_QuocGia1.set(text1A, "");
			}

			let qg1A = qg1 as QuocGia;
			this.map1.set(qg1A, map1_QuocGia1);
		}
	}

	constructor(){
		this.map1= new Map<QuocGia, Map<CacLoaiTextTrongView, String> >();

		this.initMap1();

		this.addToMap1(CacLoaiTextTrongView.Text1, QuocGia.Cam, "Hello Lao");
		this.addToMap1(CacLoaiTextTrongView.Text1, QuocGia.Lao, "Hello Cam");
		this.addToMap1(CacLoaiTextTrongView.Text1, QuocGia.Thai, "Hello Thai");

		this.addToMap1(CacLoaiTextTrongView.Text2, QuocGia.Cam, "Goodbye Lao");
		this.addToMap1(CacLoaiTextTrongView.Text2, QuocGia.Lao, "Goodbye Cam");
		this.addToMap1(CacLoaiTextTrongView.Text2, QuocGia.Thai, "Goodbye Thai");
	}

	public get(cacLoaiTextTrongView : CacLoaiTextTrongView, quocGia : QuocGia){
		return this.map1.get(quocGia)?.get(cacLoaiTextTrongView);
	}
}

class LanguageResource_BoTruyCap {
	quocGia;
	quocGiaMacDinh = QuocGia.Cam;

	resourceText : LanguageResourceText = new LanguageResourceText();

	constructor(quocGia : QuocGia){
		this.quocGia = quocGia;
	}


}