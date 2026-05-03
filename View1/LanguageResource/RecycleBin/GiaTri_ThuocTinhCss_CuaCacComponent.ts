import { CauTao_HasQuocGia_String } from "../../../Util/CauTao_HasQuocGia";
import { QuocGia } from "../../../Util/QuocGia";
import { Component } from "../../Enum/Component";


export type CauTao_GiaTri_TheoT_ThuocTinhCss<T> = {
    [Component.Component1]: {
        "ThuocTinh1" : T,
        "ThuocTinh2" : T,
        "ThuocTinh3" : T,
    },
    [Component.Component2]: {
        "ThuocTinh1" : T,
        "ThuocTinh2" : T,
    },
    [Component.Component3]: {
        "ThuocTinh1" : T,
        "ThuocTinh2" : T,
        "ThuocTinh3" : T,
        "ThuocTinh4" : T,
    },
};

export type CauTao_GiaTri_Rieng_ThuocTinhCss = CauTao_GiaTri_TheoT_ThuocTinhCss<any>;

export type CauTao_GiaTri_TheoQuocGia_ThuocTinhCss = CauTao_GiaTri_TheoT_ThuocTinhCss<CauTao_HasQuocGia_String>;

export const GiaTri_Rieng_ThuocTinhCss : CauTao_GiaTri_Rieng_ThuocTinhCss = {
    [Component.Component1]:{
        "ThuocTinh1" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh2" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh3" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
    },

    [Component.Component2]:{
        "ThuocTinh1" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh2" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
    },

    [Component.Component3]:{
        "ThuocTinh1" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh2" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh3" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
        "ThuocTinh4" : {
            "ver1" : "abcdef v1",
            "ver2" : "abcdef v2",
            "ver3" : "abcdef v3",
        },
    },
}as const;

export type GiaTri_Rieng_ThuocTinhCss = typeof GiaTri_Rieng_ThuocTinhCss[keyof typeof GiaTri_Rieng_ThuocTinhCss];

// *********************************

export const GiaTri_TheoQuocGia_ThuocTinhCss : CauTao_GiaTri_TheoQuocGia_ThuocTinhCss = {
    [Component.Component1]:{
        "ThuocTinh1" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh1"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh1"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh1"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh1"]["ver3"],
        },

        "ThuocTinh2" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh2"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh2"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh2"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh2"]["ver3"],
        },
        
        "ThuocTinh3" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh3"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh3"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh3"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component1]["ThuocTinh3"]["ver3"],
        },
    },

    [Component.Component2]:{
        "ThuocTinh1" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh1"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh1"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh1"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh1"]["ver3"],
        },
        "ThuocTinh2" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh2"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh2"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh2"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component2]["ThuocTinh2"]["ver3"],
        },
    },

    [Component.Component3]:{
        "ThuocTinh1" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh1"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh1"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh1"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh1"]["ver3"],
        },
        
        "ThuocTinh2" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh2"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh2"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh2"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh2"]["ver3"],
        },
        
        "ThuocTinh3" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh3"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh3"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh3"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh3"]["ver3"],
        },

        "ThuocTinh4" : {
            [QuocGia.Cam] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh4"]["ver1"],
            [QuocGia.Lao] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh4"]["ver2"],
            [QuocGia.Thai] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh4"]["ver2"],
            [QuocGia.Viet] : GiaTri_Rieng_ThuocTinhCss[Component.Component3]["ThuocTinh4"]["ver3"],
        },
    },
}as const;

export type GiaTri_TheoQuocGia_ThuocTinhCss = typeof GiaTri_TheoQuocGia_ThuocTinhCss[keyof typeof GiaTri_TheoQuocGia_ThuocTinhCss];

// **************************


// **************************

console.log(GiaTri_TheoQuocGia_ThuocTinhCss[Component.Component1]["ThuocTinh1"][QuocGia.Viet]);

// npx tsx GiaTri_ThuocTinhCss_CuaCacComponent.ts