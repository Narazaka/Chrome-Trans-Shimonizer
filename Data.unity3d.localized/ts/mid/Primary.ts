'use strict';
class 鹿大量 {
    public 正規表現;
    public ぉ;
    constructor(x:RegExp, y:string) {
        this.正規表現 = x;
        this.ぉ = y;
    }
}
export class 原色 {

    奈良公園: 鹿大量[] = [
        new 鹿大量(/(ポニテ|ポニーテール)/g, "リボンポニテ"),
        new 鹿大量(/何/g, "伺")
    ];

    constructor() {
    }

    private 内部(元: string, 正規: RegExp, 置換: string): string {
        let 鮭 = "";
        let ま = 正規.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += 置換;
            差分 = 置換.length + ま.index;
        } while((ま = 正規.exec(元)) !== null);
        鮭 += 元.substr(差分);
        
        return 鮭;
    }

    public 変換(元: string): string {
        let 鮭 = 元;
        for (let ぉ of this.奈良公園) {
            鮭 = this.内部(鮭, ぉ.正規表現, ぉ.ぉ);
        }
        return 鮭;
    }
}