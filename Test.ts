import { MultiLanguage_String, MultiLanguageMapRow_String } from "./Util/MultiLanguagePart_Implement";
import { QuocGia } from "./Util/QuocGia";
import { QUOC_GIA_MAC_DINH } from "./Util/QuocGiaMacDinh";

// biến language của trang này
let quocGia1 = QuocGia.Cam;

//
console.log("<p>");

    // {{ let var1 = ... }}
    let defaultVar1 = new MultiLanguageMapRow_String(QUOC_GIA_MAC_DINH, "day la cam 200_000");

    // bên dưới thì thu nhỏ không quan tâm, mặc dù nó mới là dòng in ra nội dung
    console.log(
        new MultiLanguage_String(
            defaultVar1,
            new Map(
                [
                    [ QuocGia.Cam, "day la campuchia 2" ], // không xóa QuocGia.Cam vì để dự phòng có ai đó sửa QuocGiaMacDinh // defaultValue được set sau nên không bị gì // xem tại : Util/MultiLanguagePart.ts
                    [ QuocGia.Lao, "day la lao 2"],
                    [ QuocGia.Thai, "day la thai lan 2"],
                    [ QuocGia.Viet, "day la viet nam 2"],
                ]
            )
        ).get(quocGia1)
    )

//
console.log("</p>");
