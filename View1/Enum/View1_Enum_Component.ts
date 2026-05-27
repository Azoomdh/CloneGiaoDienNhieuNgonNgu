

export const View1_Enum_Component = {
    Component1 : "Component1",
    Component2 : "Component2",
    // ...
} as const;

export type View1_Enum_Component = typeof View1_Enum_Component[keyof typeof View1_Enum_Component];

