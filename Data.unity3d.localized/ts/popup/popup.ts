/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

const ｲｴーｸﾄ = () => {
    let ｵﾌﾟﾁｵﾝ = {
        ｼﾓﾅｲｽﾞ: true,
        糞林檎: false,
        ﾚーﾙｽﾞ: false,
        ゆゆゆ: false
    };
    console.log("ｲｴーｸﾄ");
    chrome.storage.local.get(ｵﾌﾟﾁｵﾝ, (お) => {
        $('#emp').prop('checked', お.ｼﾓﾅｲｽﾞ);
        $('#k').prop('checked', お.糞林檎);
        $('#rail').prop('checked', お.ﾚーﾙｽﾞ);
        $('#yyy').prop('checked', お.ゆゆゆ);
    });
    $('#emp').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        ｼﾓﾅｲｽﾞ: checked
        };
		chrome.storage.local.set(object, ()=>{});
    });

    $('#k').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        糞林檎: checked
        };
		chrome.storage.local.set(object, ()=>{});
    });

    $('#rail').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        ﾚーﾙｽﾞ: checked
        };
		chrome.storage.local.set(object, ()=>{});
    });

    $('#yyy').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        ゆゆゆ: checked
        };
		chrome.storage.local.set(object, ()=>{});
	});
}
$(()=>{ｲｴーｸﾄ()});
