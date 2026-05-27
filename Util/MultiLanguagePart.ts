import { QuocGia } from './QuocGia';

export type MultiLanguageMap<Type1> = Record<QuocGia, Type1>;

export class MultiLanguagePart<Type1> {
    content : MultiLanguageMap<Type1>;

    constructor(content : MultiLanguageMap<Type1> ){
        this.content = content;
    }

    public getContent(quocGia : QuocGia) : Type1 {
        return this.content[quocGia];
    }
}