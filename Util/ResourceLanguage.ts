
export class LanguageResource_Key<CacLoaiQuocGia, KieuDuLieuSubKey> {
    tenQuocGia : CacLoaiQuocGia;
    subKey : KieuDuLieuSubKey;

    constructor(tenQuocGia : CacLoaiQuocGia, subKey : KieuDuLieuSubKey){
        this.tenQuocGia = tenQuocGia;
        this.subKey = subKey;
    }
};

export abstract class Abstract_LanguageResource<CacLoaiQuocGia, KieuDuLieuSubKey, KieuDuLieuTraVe> {

    protected map = new Map<LanguageResource_Key<CacLoaiQuocGia, KieuDuLieuSubKey>, KieuDuLieuTraVe>();

    get(tenQuocGia : CacLoaiQuocGia, subKey : KieuDuLieuSubKey) : KieuDuLieuTraVe|undefined {
        let key = new LanguageResource_Key(tenQuocGia, subKey);
        

        // nếu không tìm được thì nó tự trả về undefined
        return this.map.get(key);
    }

    set(tenQuocGia : CacLoaiQuocGia, subKey : KieuDuLieuSubKey, content : KieuDuLieuTraVe){
        let key = new LanguageResource_Key(tenQuocGia, subKey);

        this.map.set(key, content);
    }
}