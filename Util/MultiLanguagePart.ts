import { QuocGia } from './QuocGia';

export class MultiLanguageMap<Type1> extends Map<QuocGia, Type1|null> {

    constructor(){
        super();

        for(const quocGia of Object.values(QuocGia) ){
            this.set(quocGia, null);
        }
    }
}

export class MultiLanguagePart<Type1> {
    content = new MultiLanguageMap<Type1>();

    constructor(content : MultiLanguageMap<Type1> ) {
        this.content = content;
    }

    public getContent(quocGia : QuocGia) {
        return this.content.get(quocGia);
    }
}