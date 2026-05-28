import { MultiLanguage_String } from "./Util/MultiLanguagePart_Implement";
import { MultiLanguageMap } from './Util/MultiLanguagePart';
import { QuocGia } from "./Util/QuocGia";


let quocGia1 = QuocGia.Cam;

console.log(
    "<p> \n" +
        + "    "
        + new MultiLanguage_String(
            new Map(
                [
                    [ QuocGia.Cam, "day la campuchia 2" ],
                    [ QuocGia.Lao, "day la lao 2"],
                    [ QuocGia.Thai, "day la thai lan 2"],
                    [ QuocGia.Viet, "day la viet nam 2"],
                ]
            )
        ).getContent(quocGia1)
        + "\n"
    + "</p>"
);