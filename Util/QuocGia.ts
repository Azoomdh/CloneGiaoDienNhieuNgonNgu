
export const QuocGia = {
    Cam : "Campuchia",
    Lao : "Lao",
    Thai : "ThaiLand",
    Viet : "VietNam",
}as const;

export type QuocGia = typeof QuocGia[keyof typeof QuocGia];