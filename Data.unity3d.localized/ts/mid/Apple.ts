'use strict';
export class 革新的でまったく新しいアッと驚く機能 {

    public static 実現(元: string) : string {
        let 鮭 = "";
        let 異国語 = new RegExp(/[a-zA-Z][a-zA-Z0-9_\s\-_.,]+/g);
        let ま = 異国語.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += "k";
            for (let x of ま[0].split(/[\s\-_.,]+/)) {
                鮭 += x.charAt(0).toUpperCase();
                鮭 += x.toLowerCase().substr(1);
            }
            差分 = ま[0].length + ま.index;
        } while((ま = 異国語.exec(元)) !== null);
        鮭 += 元.substr(差分);

        return 鮭;
    }

}
