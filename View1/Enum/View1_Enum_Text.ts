
export const View1_Enum_Text = {
    Text1 : "Text1",
    Text2 : "Text2",
    // ...
}as const;

export type View1_Enum_Text = typeof View1_Enum_Text[keyof typeof View1_Enum_Text];

