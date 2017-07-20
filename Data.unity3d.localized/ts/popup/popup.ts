/// <reference path="../../../node_modules/@types/chrome/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
'use strict';

const ｲｴーｸﾄ = () => {
    let ｵﾌﾟﾁｵﾝ = {
        ｼﾓﾅｲｽﾞ: true
    };
    console.log("ｲｴーｸﾄ");
    chrome.storage.local.get(ｵﾌﾟﾁｵﾝ, (お) => {
        $('#emp').prop('checked', お.ｼﾓﾅｲｽﾞ);
    });
    $('#emp').change(function() {       
        const checked = $(this).is(':checked');        
		const object = {
	        ｼﾓﾅｲｽﾞ: checked
        };
		chrome.storage.local.set(object, ()=>{});
	});    
}
$(()=>{ｲｴーｸﾄ()});
