import { Abstract_LanguageResource } from "../../Util/ResourceLanguage";
import { View1_CacLoaiText } from "../Enum/View1_CacLoaiText";
import { QuocGia } from '../../Util/QuocGia';

export class View1_LanguageResource_Text extends Abstract_LanguageResource<QuocGia, View1_CacLoaiText, String> {
    constructor(){
        super();

        this.set(QuocGia.Cam, View1_CacLoaiText.Text1, "Hello Cam");
        this.set(QuocGia.Lao, View1_CacLoaiText.Text1, "Hello Lao");
        this.set(QuocGia.Thai, View1_CacLoaiText.Text1, "Hello Thai");
        this.set(QuocGia.Viet, View1_CacLoaiText.Text1, "Hello Viet");

        this.set(QuocGia.Cam, View1_CacLoaiText.Text2, "Goodbye Cam");
        this.set(QuocGia.Lao, View1_CacLoaiText.Text2, "Goodbye Lao");
        this.set(QuocGia.Thai, View1_CacLoaiText.Text2, "Goodbye Thai");
        this.set(QuocGia.Viet, View1_CacLoaiText.Text2, "Goodbye Viet");
    }
}