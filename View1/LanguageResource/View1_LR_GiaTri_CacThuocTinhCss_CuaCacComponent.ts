import { View1_Enum_Component } from "../Enum/View1_Enum_Component";
import { View1_Enum_ThuocTinhCss_CuaComponent1, View1_Enum_ThuocTinhCss_CuaComponent2 } from "../Enum/View1_Enum_ThuocTinhCss_CuaCacComponent";


export const View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent = {
    [View1_Enum_Component.Component1] : {
        [View1_Enum_ThuocTinhCss_CuaComponent1.thuocTinh1] : "thuoc tinh 1",
        [View1_Enum_ThuocTinhCss_CuaComponent1.thuocTinh2] : "thuoc tinh 2",
        [View1_Enum_ThuocTinhCss_CuaComponent1.thuocTinh3] : "thuoc tinh 3",
    },

    [View1_Enum_Component.Component2] : {
        [View1_Enum_ThuocTinhCss_CuaComponent2.thuocTinh1] : "thuoc tinh 1",
        [View1_Enum_ThuocTinhCss_CuaComponent2.thuocTinh2] : "thuoc tinh 2",
        [View1_Enum_ThuocTinhCss_CuaComponent2.thuocTinh3] : "thuoc tinh 3",
    },
    // ...
}as const;

export type View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent = typeof View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent[keyof typeof View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent];

console.log(View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent[View1_Enum_Component.Component1][View1_Enum_ThuocTinhCss_CuaComponent1.thuocTinh1]);

// npx tsx View1_LR_GiaTri_CacThuocTinhCss_CuaCacComponent.ts