/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';


const ぉ = $;
class ｼﾓﾅｲｻﾞー {
    ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ = {
        "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
        "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
        "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
        "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
        "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
        "ヴ": "ｳﾞ",
        "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
        "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
        "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
        "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
        "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
        "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
        "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
        "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
        "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
        "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
        "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
        "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
        "ッ": "ｯ"
    }

    constructor() {
    }

    public ｼﾓﾅｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ: string): string {
        for (var ｼ in this.ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ) {
            if(ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >=0) {
               do{
                    ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｼﾓﾅｲｽﾞﾃｷｽﾄ.replace(ｼ, this.ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ[ｼ]);
               }while(ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >= 0);
            }
        }
        return ｼﾓﾅｲｽﾞﾃｷｽﾄ;
    }

    public ﾊﾟｽｶﾗｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ: string): string {
        var ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ = "";
        var 大文字 = true;
        for (var i = 0; i < ｼﾓﾅｲｽﾞﾃｷｽﾄ.length; i++) {
            if ('_' == ｼﾓﾅｲｽﾞﾃｷｽﾄ[i]) {
                大文字 = true;
                continue;
            }
            if (true == 大文字) {
                ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ += ｼﾓﾅｲｽﾞﾃｷｽﾄ[i].toUpperCase();
                大文字 = false;
                continue;
            }
            ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ += ｼﾓﾅｲｽﾞﾃｷｽﾄ[i].toLowerCase();
        }
        return ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ;
    }
}

class ﾍﾟーｼﾞｼﾓﾅｲｻﾞー {
    private 偉い人: MutationObserver;
    private ｼﾓ: ｼﾓﾅｲｻﾞー;
    private ﾀーｹﾞｯﾂ = ['div', 'h1', 'h2','h3','h4', 'dd', 'p', 'b', 'a', 'span', 'em', 'strong'];
    private ｾﾚｸﾀー: string;
    private ｼﾓﾅｲｻﾞﾌﾞﾙ: boolean;
    private 糞林檎化: boolean;
    private ｵﾌﾟﾁｵﾝ = {
        ｼﾓﾅｲｽﾞ: true,
        糞林檎: false
    };

    constructor() {
        this.ｲﾆｼｬﾗｲｽﾞ();
    }

    public ぶっぱん() {
		this.ｾｯﾃｨー(this.ｵﾌﾟﾁｵﾝ, () => {
			this.ｼﾓﾅｲｽﾞ(null);
		});
    }

    private ｲﾆｼｬﾗｲｽﾞ() {
        this.ｼﾓ = new ｼﾓﾅｲｻﾞー();
        this.ｾﾚｸﾀー = this.ﾀーｹﾞｯﾂ.join(',');
        
        this.偉い人 = new MutationObserver((ﾐｭーﾚｺ: MutationRecord []) =>
        {
            if (ﾐｭーﾚｺ.length === 0) {
                return;
            }
            console.log("ｼﾓﾅｲｽﾞ:" + ﾐｭーﾚｺ.length);
            const 差分 = ﾐｭーﾚｺ.reduce((過去, 今) => {
                return 過去.concat(new Array(今.addedNodes));
            }, []);

            if (差分.length === 0) {
                return;
            }
            this.ｼﾓﾅｲｽﾞ(ぉ(差分));
        });
        chrome.storage.onChanged.addListener((変, 縄張) => {
            if (縄張 !== 'local') {
                return;
            }
            if (変.ｼﾓﾅｲｽﾞ) {
                this.ｼﾓﾅｲｻﾞﾌﾞﾙ = 変.ｼﾓﾅｲｽﾞ.newValue;
            }
            if (変.糞林檎) {
                this.糞林檎化 = 変.糞林檎.newValue;
            }            
        });
    }

    private ｾｯﾃｨー(ﾃﾞﾌｫ, 鰆) {
        chrome.storage.local.get(ﾃﾞﾌｫ, (ぁ) => {
            this.ｼﾓﾅｲｻﾞﾌﾞﾙ = ぁ.ｼﾓﾅｲｽﾞ;
            this.糞林檎化 = ぁ.糞林檎;
            if (鰆) {
                鰆();
            }
        });
    }

    private ｵﾌﾞｲｪーｸﾄ() {
        this.偉い人.observe(ぉ('body').get(0),
        {
            characterData: true,
            childList: true,
            subtree: true
        });
    }

    private 銭ｹﾞﾊﾞ糞林檎化(元: string) : string {
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
            //ret += "&lt;検閲済&gt;"
            差分 = ま[0].length + ま.index;
        } while((ま = 異国語.exec(元)) !== null);

        return 鮭;
    }

    private ｼﾓﾅｲｽﾞ(ﾌｫﾄｼｮｯﾌﾟ) {
        if (! this.ｼﾓﾅｲｻﾞﾌﾞﾙ) {
            return;
        }

        this.偉い人.disconnect();

        let ﾊﾞｯｷﾝｶﾞﾑ = this;

        if (ﾌｫﾄｼｮｯﾌﾟ === null) {
            ﾌｫﾄｼｮｯﾌﾟ = ぉ(this.ｾﾚｸﾀー);
        }
        else {
            ﾌｫﾄｼｮｯﾌﾟ = ﾌｫﾄｼｮｯﾌﾟ.find(this.ｾﾚｸﾀー);
        }
        ﾌｫﾄｼｮｯﾌﾟ
        .contents()
        .filter(function () {
            return (this.nodeType === 3);
        })
        .html(function () {
            let 鳩 = ぉ(this);
            let 加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ｼﾓ.ｼﾓﾅｲｽﾞ(鳩.text());
            if (ﾊﾞｯｷﾝｶﾞﾑ.糞林檎化) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.銭ｹﾞﾊﾞ糞林檎化(加工済);
            }
            return 鳩.replaceWith(加工済);
        });
        this.ｵﾌﾞｲｪーｸﾄ();
    }
}
(() => {
const ﾍﾟ = new ﾍﾟーｼﾞｼﾓﾅｲｻﾞー();
ﾍﾟ.ぶっぱん();
})();
