


// phải đặt tên giống nhau , giả vờ coi chúng là 1, 
// giả vờ coi chúng là kiểu Enum
export const QuocGia = {
    Cam : "Campuchia",
    Lao : "Lao",
    Thai : "ThaiLand",
    Viet : "VietNam",
}as const;

export type QuocGia = typeof QuocGia[keyof typeof QuocGia];


// console.log(QuocGia.Cam);
