import { QuocGia } from '../../../Util/QuocGia';


// (hỏi GPT) : tôi muốn tên thuộc tính của object a là kết quả từ biến string s trong TS

export const View1_LR_GiaTriThuocTinhCss_CuaCacComponent = {

    Component1_ThuocTinh1 : {
        [QuocGia.Cam] : "abcdef Cam",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },
    Component1_ThuocTinh2 : {
        [QuocGia.Cam] : "abcdef",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },
    Component1_ThuocTinh3 : {
        [QuocGia.Cam] : "abcdef",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },

    Component2_ThuocTinh1 : {
        [QuocGia.Cam] : "abcdef",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },
    Component2_ThuocTinh2 : {
        [QuocGia.Cam] : "abcdef",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },
    Component2_ThuocTinh3 : {
        [QuocGia.Cam] : "abcdef",
        [QuocGia.Lao] : "abcdef",
        [QuocGia.Thai] : "abcdef",
        [QuocGia.Viet] : "abcdef",
    },

    // ...
} as const;

export type View1_LR_GiaTriThuocTinhCss_CuaCacComponent = typeof View1_LR_GiaTriThuocTinhCss_CuaCacComponent[keyof typeof View1_LR_GiaTriThuocTinhCss_CuaCacComponent];

// console.log(View1_CacLoaiThuocTinhCua_Component.Component1_ThuocTinh1[QuocGia.Cam]);