export const TypeGiaTri = {
    Text : "Text",
    ThuocTinhCss : "ThuocTinhCss",
    Component : "Component",
}as const;

export type TypeGiaTri = typeof TypeGiaTri[keyof typeof TypeGiaTri];