/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

const ｲｴーｸﾄ = () => {
    let ｵﾌﾟﾁｵﾝ = {
        ｲﾈーﾎﾞー: true,
        ｼﾓﾅｲｽﾞ: true,
        糞林檎: false,
        ﾚーﾙｽﾞ: false,
        ゆゆゆ: false,
        ﾕﾆｺーﾄﾞ化: false,
        原色: false
    };
    console.log("ｲｴーｸﾄ");
    chrome.storage.local.get(ｵﾌﾟﾁｵﾝ, (お) => {
        $('#enum').prop('checked', お.ｲﾈーﾎﾞー);
        $('#emp').prop('checked', お.ｼﾓﾅｲｽﾞ);
        $('#k').prop('checked', お.糞林檎);
        $('#rail').prop('checked', お.ﾚーﾙｽﾞ);
        $('#yyy').prop('checked', お.ゆゆゆ);
        $('#mac').prop('checked', お.ﾕﾆｺーﾄﾞ化);
        $('#primary').prop('checked', お.原色);
    });

    $('#enum').change(function() {
        const checked = $(this).is(':checked');
        if (!checked) {
            $('#java input').prop('disabled', true);
        }
        else {
            $('#java input').prop('disabled', false);
        }

		const object = {
	        ｲﾈーﾎﾞー: checked
        };
		chrome.storage.local.set(object, ()=>{});
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
    
    $('#mac').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        ﾕﾆｺーﾄﾞ化: checked
        };
		chrome.storage.local.set(object, ()=>{});
    });    
    
    $('#primary').change(function() {
        const checked = $(this).is(':checked');
		const object = {
	        原色: checked
        };
		chrome.storage.local.set(object, ()=>{});
	})    
}
$(()=>{ｲｴーｸﾄ()});
