import { CauTao_HasQuocGia, CauTao_HasQuocGia_Any, CauTao_HasQuocGia_Function, CauTao_HasQuocGia_String } from '../../Util/CauTao_HasQuocGia';
import { TypeGiaTri } from '../../Util/TypeGiaTri';
import { Component } from '../Enum/Component';


export type Type_GiaTri_View1_Generic<Generic_Component, Generic_Text, Generic_ThuocTinhCss> = {
    [Component.Component1] : {
        [TypeGiaTri.Component] : Generic_Component,
        [TypeGiaTri.Text] : {
            "Text1" : Generic_Text,
            "Text2" : Generic_Text,
            "Text3" : Generic_Text,
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : Generic_ThuocTinhCss,
            "ThuocTinh2" : Generic_ThuocTinhCss,
            "ThuocTinh3" : Generic_ThuocTinhCss,
            "ThuocTinh4" : Generic_ThuocTinhCss,
        }
    },
    [Component.Component2] : {
        [TypeGiaTri.Component] : Generic_Component,
        [TypeGiaTri.Text] : {
            "Text1" : Generic_Text,
            "Text2" : Generic_Text,
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : Generic_ThuocTinhCss,
            "ThuocTinh2" : Generic_ThuocTinhCss,
            "ThuocTinh3" : Generic_ThuocTinhCss,
        }
    },
    [Component.Component3] : {
        [TypeGiaTri.Component] : Generic_Component,
        [TypeGiaTri.Text] : {
            "Text1" : Generic_Text,
            "Text2" : Generic_Text,
            "Text3" : Generic_Text,
            "Text4" : Generic_Text,
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : Generic_ThuocTinhCss,
            "ThuocTinh2" : Generic_ThuocTinhCss,
            "ThuocTinh3" : Generic_ThuocTinhCss,
            "ThuocTinh4" : Generic_ThuocTinhCss,
            "ThuocTinh5" : Generic_ThuocTinhCss,
        }
    }
};

// export type Type_GiaTri_View1_MoiQuocGia = Type_GiaTri_View1_Generic<Function, string, string> ;

// export type Type_GiaTri_View1_GiaTriRieng = Type_GiaTri_View1_Generic<any, any, any>;

// export type Type_GiaTri_View1_LanguageResource = CauTao_HasQuocGia<Type_GiaTri_View1_MoiQuocGia>;


// export type Type_GiaTri_View1_GiaTriRieng = Type_GiaTri_View1_Generic<any, CauTao_HasQuocGia_Any, any>; 
// tại text1, mỗi quốc gia có N version
// không cần, comment đoạn text để lúc khác dùng

// phiên bản khác
export type Type_GiaTri_View1_LanguageResource = Type_GiaTri_View1_Generic<CauTao_HasQuocGia_Function, CauTao_HasQuocGia_String, CauTao_HasQuocGia_String>;

// console.log()


// in ra cấu trúc
// npx ts-json-schema-generator --path '.\GiaTri_View1_KhaiBaoType.ts' --type 'Type_GiaTri_View1_LanguageResource'


