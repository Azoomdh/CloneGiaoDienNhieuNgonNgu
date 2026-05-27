
export const Enum_Text = {
    Text1 : "Text1",
    Text2 : "Text2",
    // ...
}as const;

export type Enum_Text = typeof Enum_Text[keyof typeof Enum_Text];

