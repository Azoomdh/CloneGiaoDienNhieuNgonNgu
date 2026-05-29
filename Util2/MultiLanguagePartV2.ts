import { QuocGia } from '../Util/QuocGia';

export class MultiLanguageV2_MapInput<Type1> extends Map<Type1, Array<QuocGia> > { }

export class MultiLanguageV2_MapContent<Type1> extends Map<QuocGia, Type1|null> {
    constructor(){
        super();

        for(const quocGia of Object.values(QuocGia)){
            this.set(quocGia, null);
        }
    }
}

export class MultiLanguagePartV2<Type1> {

    content = new MultiLanguageV2_MapContent<Type1>();

    constructor(defaultQuocGia : QuocGia, defaultValue : Type1 , input : MultiLanguageV2_MapInput<Type1>){

        for(const [value, arrayQuocGia] of input ){
            for(const motQuocGia of arrayQuocGia ){
                this.content.set(motQuocGia, value);
            }
        }
        this.content.set(defaultQuocGia, defaultValue);
    }

    public get(quocGia : QuocGia){
        return this.content.get(quocGia);
    }

}

