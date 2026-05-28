import { QuocGia } from "./Util/QuocGia";
import { MultiLanguagePartV2 } from "./Util2/MultiLanguagePartV2";
import { MultiLanguageV2_String } from './Util2/MultiLanguagePartV2_Implement';

let var1 = new MultiLanguageV2_String(
    new Map(
        [
            [ "day la dong duong", [QuocGia.Cam, QuocGia.Lao, QuocGia.Viet] ],
            [ "day la thai lan",  [QuocGia.Thai, ] ]
        ]
    )
)

console.log(var1.get(QuocGia.Lao));