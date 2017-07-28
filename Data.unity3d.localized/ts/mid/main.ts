/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

import {ｼﾓﾅｲｻﾞー} from '../../../Store.unity3d.localized/Shimonizer/porting/js/Shimonizer';
import {林檎ﾕﾆｺーﾄﾞ} from './UTF'
import {原色} from './Primary';
import {革新的でまったく新しいアッと驚く機能} from './Apple';
import {翻訳} from './Trans';

const ぉ = $;
class ﾍﾟーｼﾞｼﾓﾅｲｻﾞー {
    private 偉い人: MutationObserver;
    private ｼﾓ: ｼﾓﾅｲｻﾞー;
    private ﾕﾆｺーﾄﾞ: 林檎ﾕﾆｺーﾄﾞ;
    private 奈良公園: 原色;
    private そうMacならね: 革新的でまったく新しいアッと驚く機能;

    private ﾀーｹﾞｯﾂ =
            ['div', 'h1', 'h2','h3','h4', 'dt', 'dd',
            'th','td', 'pre',
            'p', 'b', 'a', 'span', 'em', 'strong', 'code',
            'li', 'ul', 'blockquote', 'label'];
    private ｾﾚｸﾀー: string;

    // ↓ 構造体か何かにしたい
    private ｲﾈーﾎﾞー: boolean;
    private ｼﾓﾅｲｻﾞﾌﾞﾙ: boolean;
    private 糞林檎化: boolean;
    private ﾕﾆｺーﾄﾞ化: boolean;
    private ﾚーﾙｽﾞｨーｽﾞ: boolean;
    private ゆゆﾅｲｽﾞ: boolean;
    private 原色化: boolean;
    private ﾌｫﾝﾄ変更: boolean;

    private ｵﾌﾟﾁｵﾝ = {
        ｲﾈーﾎﾞー: true,
        ｼﾓﾅｲｽﾞ: true,
        糞林檎: false,
        ﾕﾆｺーﾄﾞ化: false,
        ﾚーﾙｽﾞ: false,
        ゆゆゆ: false,
        原色: false,
        ﾌｫﾝﾄ変更: false
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
        this.ﾕﾆｺーﾄﾞ = new 林檎ﾕﾆｺーﾄﾞ();
        this.奈良公園 = new 原色();
        this.そうMacならね = new 革新的でまったく新しいアッと驚く機能();

        this.ｾﾚｸﾀー = this.ﾀーｹﾞｯﾂ.join(',');

        this.偉い人 = new MutationObserver((ﾐｭーﾚｺ: MutationRecord []) =>
        {
            if (ﾐｭーﾚｺ.length === 0) {
                return;
            }
            //console.log("ｼﾓﾅｲｽﾞ:" + ﾐｭーﾚｺ.length);
            const 差分 = ﾐｭーﾚｺ.reduce((過去, 今) => {
                return 過去.concat(今.addedNodes);
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
            if (変.ｲﾈーﾎﾞー) {
                this.ｲﾈーﾎﾞー = 変.ｲﾈーﾎﾞー.newValue;
            }
            if (変.ﾕﾆｺーﾄﾞ化) {
                this.ﾕﾆｺーﾄﾞ化 = 変.ﾕﾆｺーﾄﾞ化.newValue;
            }
            if (変.ｼﾓﾅｲｽﾞ) {
                this.ｼﾓﾅｲｻﾞﾌﾞﾙ = 変.ｼﾓﾅｲｽﾞ.newValue;
            }
            if (変.糞林檎) {
                this.糞林檎化 = 変.糞林檎.newValue;
            }
            if (変.ﾚーﾙｽﾞ) {
                this.ﾚーﾙｽﾞｨーｽﾞ = 変.ﾚーﾙｽﾞ.newValue;
            }
            if (変.ゆゆゆ) {
                this.ゆゆﾅｲｽﾞ = 変.ゆゆゆ.newValue;
            }
            if (変.原色) {
                this.原色化 = 変.原色.newValue;
            }
            if (変.ﾌｫﾝﾄ変更) {
                this.ﾌｫﾝﾄ変更 = 変.ﾌｫﾝﾄ変更.newValue;
            }

        });
    }

    private ｾｯﾃｨー(ﾃﾞﾌｫ, 鰆) {
        chrome.storage.local.get(ﾃﾞﾌｫ, (ぁ) => {
            this.ｲﾈーﾎﾞー = ぁ.ｲﾈーﾎﾞー;
            this.ｼﾓﾅｲｻﾞﾌﾞﾙ = ぁ.ｼﾓﾅｲｽﾞ;
            this.糞林檎化 = ぁ.糞林檎;
            this.ﾚーﾙｽﾞｨーｽﾞ = ぁ.ﾚーﾙｽﾞ;
            this.ゆゆﾅｲｽﾞ = ぁ.ゆゆゆ;
            this.ﾕﾆｺーﾄﾞ化 = ぁ.ﾕﾆｺーﾄﾞ化;
            this.原色化 = ぁ.原色;
            this.ﾌｫﾝﾄ変更 = ぁ.ﾌｫﾝﾄ変更;
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

    private 絵文字(元: string):string {
        const ｶーｻーｻー = {
            'height': '24px',
            'vertical-align': 'top',
        };
        return 元.replace(
            /(?:[\u00A9\u00AE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9-\u21AA\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2618\u261D\u2620\u2622-\u2623\u2626\u262A\u262E-\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665-\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B-\u269C\u26A0-\u26A1\u26AA-\u26AB\u26B0-\u26B1\u26BD-\u26BE\u26C4-\u26C5\u26C8\u26CE-\u26CF\u26D1\u26D3-\u26D4\u26E9-\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934-\u2935\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|(?:\uD83C[\uDC04\uDCCF\uDD70-\uDD71\uDD7E-\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01-\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50-\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96-\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F-\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95-\uDD96\uDDA4-\uDDA5\uDDA8\uDDB1-\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB-\uDEEC\uDEF0\uDEF3-\uDEF6]|\uD83E[\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]))/g,
            $('<img>', {src: chrome.extension.getURL('image.localized/na.svg'), alt: "奈"})
            .css(ｶーｻーｻー).prop('outerHTML'));
    }

    private ゆゆ式(元: string) : string {
        return 元.replace(/([a-zA-Z][a-zA-Z0-9]+|ゆ)/g, "ゆゆ式");
    }

    private ﾚーﾙｽﾞｨーｻﾞｲｽﾞｨーｽﾞ(ｽﾄﾘﾝｸﾞｽﾞ: string): string { // 頑張るならTinySegmenterやkuromoji.jsを導入したい
        return ｽﾄﾘﾝｸﾞｽﾞ.replace(/([a-zA-Z](?:\b|(?=[^a-zA-Z0-9\u00C0-\u00FF]))|[ァ-ヵーｦ-ﾟ]+)/g, "$1es");
    }

    /**
     * TODO: ﾊﾞﾝﾄﾞﾙ出来そうなﾌｫﾝﾄあったらこれにしたい
    private ﾌｫﾝﾄねじ込み(ﾌｫﾄｼｮｯﾌﾟ: JQuery) {
        let ﾌｫﾝﾄｶーｻーｻー = {'font-family': 'ふぉ'};
        if (navigator.platform.match(/Mac/)) {
            ﾌｫﾝﾄｶーｻーｻー["-webkit-font-smoothing"] ="none";
        }
        if (null === ﾌｫﾄｼｮｯﾌﾟ) {
            $(document.getElementsByTagName("head")[0]).append(
                $('<style>').text(
                    "@font-face {font-family: 'ふぉ';" +
                    `src: url(${chrome.extension.getURL('＜ﾌｫﾝﾄ置き場＞')});}`)
            );
            $(document).find('body').css(ﾌｫﾝﾄｶーｻーｻー);
            return;
        }
        ﾌｫﾄｼｮｯﾌﾟ.css(ﾌｫﾝﾄｶーｻーｻー);
    }
    */

    private ﾌｫﾝﾄ固定(ﾌｫﾄｼｮｯﾌﾟ: JQuery) {
        let ﾌｫﾝﾄｶーｻーｻー = {
            'font-family': '"MS Gothic","ＭＳ ゴシック","MS Mincho", "MS 明朝","Osaka"'};
        if (navigator.platform.match(/Mac/)) {
            ﾌｫﾝﾄｶーｻーｻー["-webkit-font-smoothing"] ="none";
        }
        if (null === ﾌｫﾄｼｮｯﾌﾟ) {
            $(document).find('body').css(ﾌｫﾝﾄｶーｻーｻー);
            return;
        }
        ﾌｫﾄｼｮｯﾌﾟ.css(ﾌｫﾝﾄｶーｻーｻー);
    }

    private ｼﾓﾅｲｽﾞ(ﾌｫﾄｼｮｯﾌﾟ) {
        this.偉い人.disconnect();
        if (! this.ｲﾈーﾎﾞー) {
            return;
        }

        let ﾊﾞｯｷﾝｶﾞﾑ = this;

        if (null === ﾌｫﾄｼｮｯﾌﾟ) {
            ﾌｫﾄｼｮｯﾌﾟ = $(document).find(this.ｾﾚｸﾀー);
            if (this.ﾌｫﾝﾄ変更) {
                this.ﾌｫﾝﾄ固定(null);
            }
        }
        else {
            ﾌｫﾄｼｮｯﾌﾟ = ﾌｫﾄｼｮｯﾌﾟ.find(this.ｾﾚｸﾀー);
        }

        if (this.ﾌｫﾝﾄ変更) {
            this.ﾌｫﾝﾄ固定(ﾌｫﾄｼｮｯﾌﾟ);
        }

        ﾌｫﾄｼｮｯﾌﾟ
        .contents()
        .filter(function () {
            return (this.nodeType === 3);
        })
        .html(function () {
            let 鳩 = ぉ(this);
            let 加工済 = 鳩.text();
            //console.log(加工済);

            if (ﾊﾞｯｷﾝｶﾞﾑ.ゆゆﾅｲｽﾞ) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ゆゆ式(加工済);
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.原色化) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.絵文字(ﾊﾞｯｷﾝｶﾞﾑ.奈良公園.変換(加工済));
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.糞林檎化) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.そうMacならね.実現(加工済);
            }
            if (ﾊﾞｯｷﾝｶﾞﾑ.ﾚーﾙｽﾞｨーｽﾞ) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ﾚーﾙｽﾞｨーｻﾞｲｽﾞｨーｽﾞ(加工済);
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.ﾕﾆｺーﾄﾞ化) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ﾕﾆｺーﾄﾞ.変換(加工済);
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.ｼﾓﾅｲｻﾞﾌﾞﾙ) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ｼﾓ.ｼﾓﾅｲｽﾞ(加工済);
            }

            // 重いのでやめた
            //const と = new 翻訳();
            //と.実行(加工済, 鳩);

            return 鳩.replaceWith(加工済);
        });
        this.ｵﾌﾞｲｪーｸﾄ();
    }
}
(() => {
const ﾍﾟ = new ﾍﾟーｼﾞｼﾓﾅｲｻﾞー();
ﾍﾟ.ぶっぱん();
})();
