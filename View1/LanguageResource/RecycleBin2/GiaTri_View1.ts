import { Component } from '../../Enum/Component';
import { TypeGiaTri } from '../../../Util/TypeGiaTri';
import { CauTao_HasQuocGia_Function, CauTao_HasQuocGia_String } from '../../../Util/CauTao_HasQuocGia';

export type CauTao_GiaTri_View1_Generic<Generic_KieuCuaThuocTinhCss> = {
    [Component.Component1] : {
        [TypeGiaTri.Component] : CauTao_HasQuocGia_Function,
        [TypeGiaTri.Text] : {
            "Text1" : CauTao_HasQuocGia_String,
            "Text2" : CauTao_HasQuocGia_String,
            "Text3" : CauTao_HasQuocGia_String,
        }
        [TypeGiaTri.ThuocTinhCss] : {
            ThuocTinh1 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh2 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh3 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh4 : Generic_KieuCuaThuocTinhCss,
        }
    },
    [Component.Component2] : {
        [TypeGiaTri.Component] : CauTao_HasQuocGia_Function,
        [TypeGiaTri.Text] : {
            "Text1" : CauTao_HasQuocGia_String,
            "Text2" : CauTao_HasQuocGia_String,
            "Text3" : CauTao_HasQuocGia_String,
            "Text4" : CauTao_HasQuocGia_String,
        }
        [TypeGiaTri.ThuocTinhCss] : {
            ThuocTinh1 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh2 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh3 : Generic_KieuCuaThuocTinhCss,
        }
    },
    [Component.Component3] : {
        [TypeGiaTri.Component] : CauTao_HasQuocGia_Function,
        [TypeGiaTri.Text] : {
            "Text1" : CauTao_HasQuocGia_String,
            "Text2" : CauTao_HasQuocGia_String,
        }
        [TypeGiaTri.ThuocTinhCss] : {
            ThuocTinh1 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh2 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh3 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh4 : Generic_KieuCuaThuocTinhCss,
            ThuocTinh5 : Generic_KieuCuaThuocTinhCss,
        }
    },
};

// 🚩lý do cho vào thùng rác = 
// ở mỗi nút lá là phải paste từng quốc gia, phiền phức
// người dùng muốn so sánh thì để 2 cửa sổ mà so sánh, không cần đặt cạnh nhau 