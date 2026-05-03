import { CauTao_HasQuocGia_String } from "../../Util/CauTao_HasQuocGia";
import { QuocGia } from "../../Util/QuocGia";
import { Enum_Text } from "../Enum/Enum_Text";

export type CauTao_GiaTri_Text = {
    [Enum_Text.Text1] : CauTao_HasQuocGia_String,
    [Enum_Text.Text2] : CauTao_HasQuocGia_String,
};

export const GiaTri_Text : CauTao_GiaTri_Text= {
    [Enum_Text.Text1] : {
        [QuocGia.Cam] : "hello Cam",
        [QuocGia.Lao] : "hello Lao",
        [QuocGia.Thai] : "hello Thai",
        [QuocGia.Viet] : "hello Viet",
    },
    [Enum_Text.Text2] : {
        [QuocGia.Cam] : "hello Cam",
        [QuocGia.Lao] : "hello Lao",
        [QuocGia.Thai] : "hello Thai",
        [QuocGia.Viet] : "hello Viet",
    },
    // ...
} as const;

export type GiaTri_Text = typeof GiaTri_Text[keyof typeof GiaTri_Text];