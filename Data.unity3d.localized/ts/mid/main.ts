/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

import {ｼﾓﾅｲｻﾞー} from '../../../Store.unity3d.localized/Shimonizer/porting/js/Shimonizer';
import {林檎ﾕﾆｺーﾄﾞ} from './UTF'
import {原色} from './Primary';
import {革新的でまったく新しいアッと驚く機能} from './Apple';

const ぉ = $;
class ﾍﾟーｼﾞｼﾓﾅｲｻﾞー {
    private 偉い人: MutationObserver;
    private ｼﾓ: ｼﾓﾅｲｻﾞー;
    private ﾕﾆｺーﾄﾞ: 林檎ﾕﾆｺーﾄﾞ;
    private 奈良公園: 原色;

    private ﾀーｹﾞｯﾂ =
            ['div', 'h1', 'h2','h3','h4', 'dt', 'dd',
            'th','td',
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

    private ｵﾌﾟﾁｵﾝ = {
        ｲﾈーﾎﾞー: true,
        ｼﾓﾅｲｽﾞ: true,
        糞林檎: false,
        ﾕﾆｺーﾄﾞ化: false,
        ﾚーﾙｽﾞ: false,
        ゆゆゆ: false,
        原色: false
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


    private ゆゆ式(元: string) : string {
        return 元.replace(/([a-zA-Z][a-zA-Z0-9]+|ゆ)/g, "ゆゆ式");
    }

    private ﾚーﾙｽﾞｨーｻﾞｲｽﾞｨーｽﾞ(ｽﾄﾘﾝｸﾞｽﾞ: string): string { // 頑張るならTinySegmenterやkuromoji.jsを導入したい
        return ｽﾄﾘﾝｸﾞｽﾞ.replace(/([a-zA-Z](?:\b|(?=[^a-zA-Z0-9\u00C0-\u00FF]))|[ァ-ヵーｦ-ﾟ]+)/g, "$1es");
    }

    private ｼﾓﾅｲｽﾞ(ﾌｫﾄｼｮｯﾌﾟ) {
        if (! this.ｲﾈーﾎﾞー) {
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
            let 加工済 = 鳩.text();

            if (ﾊﾞｯｷﾝｶﾞﾑ.ゆゆﾅｲｽﾞ) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.ゆゆ式(加工済);
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.原色化) {
                加工済 = ﾊﾞｯｷﾝｶﾞﾑ.奈良公園.変換(加工済);
            }

            if (ﾊﾞｯｷﾝｶﾞﾑ.糞林檎化) {
                加工済 = 革新的でまったく新しいアッと驚く機能.実現(加工済);
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
            return 鳩.replaceWith(加工済);
        });
        this.ｵﾌﾞｲｪーｸﾄ();
    }
}
(() => {
const ﾍﾟ = new ﾍﾟーｼﾞｼﾓﾅｲｻﾞー();
ﾍﾟ.ぶっぱん();
})();
