import { TypeGiaTri } from "../../Util/TypeGiaTri";
import { Component } from "../Enum/Component";
import { Type_GiaTri_View1_GiaTriRieng } from "./GiaTri_View1_KhaiBaoType";
import { Component1_1 } from '../Component/Component1/Component1_1';
import { Component1_2 } from '../Component/Component1/Component1_2';
import { CauTao_HasQuocGia_Any, CauTao_HasQuocGia_String } from "../../Util/CauTao_HasQuocGia";

export const GiaTri_View1_GiaTriRieng : Type_GiaTri_View1_GiaTriRieng = {
    [Component.Component1] : {
        [TypeGiaTri.Component] : {
            "ver1" : Component1_1.getNewObject,
            "ver2" : Component1_2.getNewObject
        },
        [TypeGiaTri.Text] : {
            "Text1" : {

            },

            "Text2" : {

            },
            "Text3" : {

            },
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : {

            },
            "ThuocTinh2" : {

            },
            "ThuocTinh3" : {},
            "ThuocTinh4" : {},
        }
    },
    [Component.Component2] : {
        [TypeGiaTri.Component] : {},
        [TypeGiaTri.Text] : {
            "Text1" : {},
            "Text2" : {},
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : {},
            "ThuocTinh2" : {},
            "ThuocTinh3" : {},
        }
    },
    [Component.Component3] : {
        [TypeGiaTri.Component] : {},
        [TypeGiaTri.Text] : {
            "Text1" : {},
            "Text2" : {},
            "Text3" : {},
            "Text4" : {},
        },
        [TypeGiaTri.ThuocTinhCss] : {
            "ThuocTinh1" : {},
            "ThuocTinh2" : {},
            "ThuocTinh3" : {},
            "ThuocTinh4" : {},
            "ThuocTinh5" : {},
        }
    }
};