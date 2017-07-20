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
    private ｵﾌﾟﾁｵﾝ = {
        ｼﾓﾅｲｽﾞ: true
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
        });
    }

    private ｾｯﾃｨー(ﾃﾞﾌｫ, 鰆) {
        chrome.storage.local.get(ﾃﾞﾌｫ, (ぁ) => {
            this.ｼﾓﾅｲｻﾞﾌﾞﾙ = ぁ.ｼﾓﾅｲｽﾞ;
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
            let html = ぉ(this);
            return html.replaceWith(ﾊﾞｯｷﾝｶﾞﾑ.ｼﾓ.ｼﾓﾅｲｽﾞ(html.text()));
        });
        this.ｵﾌﾞｲｪーｸﾄ();
    }
}
(() => {
const ﾍﾟ = new ﾍﾟーｼﾞｼﾓﾅｲｻﾞー();
ﾍﾟ.ぶっぱん();
})();
