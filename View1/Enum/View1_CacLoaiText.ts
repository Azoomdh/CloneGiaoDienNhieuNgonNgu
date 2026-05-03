
export const View1_CacLoaiText = {
    Text1 : "Text1",
    Text2 : "Text2",
    // ...
}as const;

export type View1_CacLoaiText = typeof View1_CacLoaiText[keyof typeof View1_CacLoaiText];

