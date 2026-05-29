import { QuocGia } from "./Util/QuocGia";
import { QUOC_GIA_MAC_DINH } from "./Util/QuocGiaMacDinh";
import { MultiLanguageV2_String } from './Util2/MultiLanguagePartV2_Implement';


// biến language của trang này
let quocGia1 = QuocGia.Cam;

//
console.log("<p>");

    // {{ let var1 = ... }}
    let defaultValue1 = "day la dong duong 100_000"; // QUOC_GIA_MAC_DINH

    // bên dưới thì thu nhỏ không quan tâm, mặc dù nó mới là dòng in ra nội dung
    console.log(
        new MultiLanguageV2_String(
            QUOC_GIA_MAC_DINH, defaultValue1,
            new Map(
                [
                    [ "day la dong duong", [QuocGia.Cam, QuocGia.Lao, QuocGia.Viet] ], // không xóa QuocGia.Cam vì để dự phòng có ai đó sửa QuocGiaMacDinh // defaultValue được set sau nên không bị gì // xem : Util2/MultiLanguagePartV2.ts
                    [ "day la thai lan",  [QuocGia.Thai, ] ]
                ]
            )
        ).get(quocGia1)
    )

//
console.log("</p>");
