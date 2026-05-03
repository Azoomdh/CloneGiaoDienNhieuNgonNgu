

export const Component = {
    Component1 : "Component1",
    Component2 : "Component2",
    Component3 : "Component3",
    // ...
} as const;

export type Component = typeof Component[keyof typeof Component];

// console.log("hello component");