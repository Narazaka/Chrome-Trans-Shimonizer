'use strict';

import {鹿大量} from './Primary';

export class 革新的でまったく新しいアッと驚く機能 {

    ｹﾍﾞｯｸ州: 鹿大量[] = [
        new 鹿大量(/(Windows(\s*[0-9]+)?|([Gg][Nn][Uu]\/)?[Ll]inux)/g, "PC"),
        new 鹿大量(/(yum|zypper|port|pkg|cinst|choco|apt|npm|pip)/g, "brew"),
        new 鹿大量(/(Microsoft|マイクロソフト)/g, "M$"),
        new 鹿大量(/Insider/g, "Public"),
        new 鹿大量(/Preview/g, "Beta"),
        new 鹿大量(/SSD/g, "ﾌﾗｯｼｭｽﾄﾚーｼﾞ"),
        new 鹿大量(/Android(\s*[0-9a-zA-Z]+)?/g, "ｽﾏーﾄﾌｫﾝ"),
        new 鹿大量(/新/g, "革新"),
        new 鹿大量(/([ウｳ][イィｲｨ][ルﾙ][スｽ]|([マﾏ][ルﾙ]|[スｽ][パﾊﾟ][イｲ]|[ラﾗ][ンﾝ][サｻ][ムﾑ])[ウｳ][エェｴｪ][アｧ]|感染)/g, ""),
    ];

    public 実現(元: string) : string {
        let 鮭 = "";
        let 異国語 = new RegExp(/[a-zA-Z][a-zA-Z0-9\s_\-.,]{2,}/g);
        元 = this.変換(元);

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

        return this.数値正規化(this.ｶﾀｶﾅ正規化(鮭));
    }


    private ｶﾀｶﾅ正規化(元: string) : string {
        let 鮭 = "";
        let ｶﾀｶﾅ = new RegExp(/[ァ-ンー]+ー+/g); // TODO: erの伸ばしだけに対応したい
        let ま = ｶﾀｶﾅ.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += ま[0].substr(0, ま[0].lastIndexOf('ー'));
            差分 = ま[0].length + ま.index;
        } while((ま = ｶﾀｶﾅ.exec(元)) !== null);
        鮭 += 元.substr(差分);
        return 鮭;
    }

    private 数値正規化(元: string) : string {
        let 鮭 = "";
        let 整数 = new RegExp(/(0x)?[0-9]+/g);
        let ま = 整数.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += parseInt(ま[0]).toString(8);
            差分 = ま[0].length + ま.index;
        } while((ま = 整数.exec(元)) !== null);
        鮭 += 元.substr(差分);
        return 鮭;
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
            差分 =　ま[0].length + ま.index;
        } while((ま = 正規.exec(元)) !== null);
        鮭 += 元.substr(差分);

        return 鮭;
    }

    public 変換(元: string): string {
        let 鮭 = 元;
        for (let ぉ of this.ｹﾍﾞｯｸ州) {
            鮭 = this.内部(鮭, ぉ.正規表現, ぉ.ぉ);
        }
        return 鮭;
    }

}
