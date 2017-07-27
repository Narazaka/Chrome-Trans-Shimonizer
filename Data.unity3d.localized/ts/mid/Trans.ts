/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

const ぉ = $;
export class 翻訳 {

    readonly ﾄﾗﾝｽｴﾑﾖﾝ = "https://hk1d.hyper-unko.com/trans.m4/monster-stlike/to.do?format=jpeg";

    constructor() {
    }

    public 実行(文字列: string, 挿入先: JQuery) {
        ぉ.post(this.ﾄﾗﾝｽｴﾑﾖﾝ,
            {trans: 文字列})
            .then((data) => {
                console.log(data);
                挿入先.replaceWith(data);
            },
            () => {
            });
    }
}
