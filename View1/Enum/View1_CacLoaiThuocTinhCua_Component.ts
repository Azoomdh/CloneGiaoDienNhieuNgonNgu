
// không làm vì 
// không phân biệt được 
//      View1_CacLoaiThuocTinhCuaComponent.Component1.ThuocTinh1 
//      với 
//      View1_CacLoaiThuocTinhCuaComponent.Component2.ThuocTinh2


// vì TS đều nhìn nó là "ThuocTinh1"
// nếu dùng symbol thì không serializable được (không truyền qua mạng được)


// export const View1_CacLoaiThuocTinhCuaComponent ={
//     Component1 : {
//         ThuocTinh1 : "ThuocTinh1",
//         ThuocTinh2 : "ThuocTinh2",
//         ThuocTinh3 : "ThuocTinh3",
//     },
//     Component2 : {
//         ThuocTinh1 : "ThuocTinh1",
//         ThuocTinh2 : "ThuocTinh2",
//         ThuocTinh3 : "ThuocTinh3",
//     },
//     // ...
// }
// 

export const View1_CacLoaiThuocTinhCua_Component = {
    Component1_ThuocTinh1 : "Component1_ThuocTinh1",
    Component1_ThuocTinh2 : "Component1_ThuocTinh2",
    Component1_ThuocTinh3 : "Component1_ThuocTinh3",

    Component2_ThuocTinh1 : "Component2_ThuocTinh1",
    Component2_ThuocTinh2 : "Component2_ThuocTinh2",
    Component2_ThuocTinh3 : "Component2_ThuocTinh3",

    // ...
} as const;

export type View1_CacLoaiThuocTinhCua_Component = typeof View1_CacLoaiThuocTinhCua_Component[keyof typeof View1_CacLoaiThuocTinhCua_Component];