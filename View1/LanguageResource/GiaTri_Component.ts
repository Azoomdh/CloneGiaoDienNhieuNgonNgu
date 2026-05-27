
import { Component } from "../Enum/Component";
import { QuocGia } from '../../Util/QuocGia';
import { Component1_1 } from "../Component/Component1/Component1_1";
import { Component1_2 } from "../Component/Component1/Component1_2";
import { Component2_1 } from "../Component/Component2/Component2_1";
import { Component2_2 } from "../Component/Component2/Component2_2";
import { CauTao_HasQuocGia_Function } from "../../Util/CauTao_HasQuocGia";

export type CauTao_GiaTri_Component_Component = CauTao_HasQuocGia_Function;

export type CauTao_GiaTri_Component = {
    [Component.Component1] : CauTao_GiaTri_Component_Component,
    [Component.Component2] : CauTao_GiaTri_Component_Component,
    [Component.Component3] : CauTao_GiaTri_Component_Component,
};

export const GiaTri_Component : CauTao_GiaTri_Component = {
    [Component.Component1] : {
        [QuocGia.Cam] : Component1_1.getNewObject,
        [QuocGia.Lao] : Component1_2.getNewObject,
        [QuocGia.Thai] : Component1_1.getNewObject,
        [QuocGia.Viet] : Component1_2.getNewObject,
    },
    
    [Component.Component2] : {
        [QuocGia.Cam] : Component2_1.getNewObject,
        [QuocGia.Lao] : Component2_2.getNewObject,
        [QuocGia.Thai] : Component2_1.getNewObject,
        [QuocGia.Viet] : Component2_2.getNewObject,
    },

    [Component.Component3] : {
        [QuocGia.Cam] : Component2_1.getNewObject,
        [QuocGia.Lao] : Component2_2.getNewObject,
        [QuocGia.Thai] : Component2_1.getNewObject,
        [QuocGia.Viet] : Component2_2.getNewObject,
    },
    // ...
}as const;

export type GiaTri_Component = typeof GiaTri_Component[keyof typeof GiaTri_Component];

console.log(GiaTri_Component[Component.Component1][QuocGia.Cam]("hello1", "hello2", "hello3"));

// npx tsx GiaTri_Component.ts