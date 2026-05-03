import { QuocGia } from "./QuocGia";

export type CauTao_HasQuocGia<Type> = {
    [QuocGia.Cam] : Type,
    [QuocGia.Lao] : Type,
    [QuocGia.Thai] : Type,
    [QuocGia.Viet] : Type,
}

export type CauTao_HasQuocGia_String = CauTao_HasQuocGia<String>;

export type CauTao_HasQuocGia_Function = CauTao_HasQuocGia<Function>;

export type CauTao_HasQuocGia_Any = CauTao_HasQuocGia<any>;