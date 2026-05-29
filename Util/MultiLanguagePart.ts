import { QuocGia } from './QuocGia';

export class MultiLanguageMap<Type1> extends Map<QuocGia, Type1|null> {

    constructor(){
        super();

        for(const quocGia of Object.values(QuocGia) ){
            this.set(quocGia, null);
        }
    }
}

export class MultiLanguageMapRow<Type1> {
    quocGia : QuocGia;
    value : Type1;

    constructor(quocGia : QuocGia, value : Type1){
        this.quocGia = quocGia;
        this.value = value;
    }
}

export class MultiLanguagePart<Type1> {
    content = new MultiLanguageMap<Type1>();

    constructor(defaultValue : MultiLanguageMapRow<Type1>, content : MultiLanguageMap<Type1> ) {
        this.content = content;
        this.content.set(defaultValue.quocGia, defaultValue.value);
    }

    public get(quocGia : QuocGia) {
        return this.content.get(quocGia);
    }
}