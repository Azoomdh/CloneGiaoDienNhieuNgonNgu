

export const View1_CacLoaiComponent = {
    Component1 : "Component1",
    Component2 : "Component2",
    // ...
} as const;

export type View1_CacLoaiComponent = typeof View1_CacLoaiComponent[keyof typeof View1_CacLoaiComponent];

