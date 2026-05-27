import { MultiLanguage_String } from "./Util/MultiLanguagePart_Implement";
import { MultiLanguageMap } from './Util/MultiLanguagePart';
import { QuocGia } from "./Util/QuocGia";


// let text1 : MultiLanguage_String = new MultiLanguage_String(
//     {
//         Campuchia: "day la campuchia",
//         Lao: "day la lao",
//         ThaiLand: "day la thai lan",
//         VietNam: "day la viet nam",
//     }
// )

// console.log(text1.getContent(QuocGia.Lao));


let quocGia1 = QuocGia.Cam;

console.log(
    "<p> \n" +
        + "    "
        + new MultiLanguage_String(
            {
                Campuchia: "day la campuchia 2",
                Lao: "day la lao 2",
                ThaiLand: "day la thai lan 2",
                VietNam: "day la viet nam 2",
            }
        ).getContent(quocGia1)
        + "\n"
    + "</p>"
);