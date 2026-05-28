import { QuocGia } from "../Util/QuocGia";

export type MultiLanguageV2_MapContent<Type1> = {
    [K in QuocGia] : Type1|null ;
};

// export type MultiLanguageV2_MapInput<Type1> = Map<Type1, Array<QuocGia> >;

export class MultiLanguageV2_MapInput<Type1> extends Map<Type1, Array<QuocGia> > { }

export class MultiLanguagePartV2<Type1> {
    content : MultiLanguageV2_MapContent<Type1>;

    // constructor(input : MultiLanguageV2_MapInput<Type1>){
    constructor(input : MultiLanguageV2_MapInput<Type1> ) {

        for(const [value, arrayQuocGia] of input ){
            for(const motQuocGia of arrayQuocGia ){
                this.content.set(motQuocGia, value);
            }
        }

        
        this.content = tempContent;
    }
}