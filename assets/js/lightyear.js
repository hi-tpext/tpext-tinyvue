var lightyear = function(){
	return {
        // 页面小提示
        notify  : function ($msg, $type, $delay, $icon, $from, $align) {
            TinyNotify({
                type: $type,
                message: $msg,
                position: 'top-right',
                duration: $delay,
            });
        },
        // 页面加载动画
		loading : function ($mode) {
            let loading = TinyLoading.service({
                background: 'rgba(0, 0, 0, 0.2)',
                target: document.getElementById('app')
            })

            setTimeout(() => {
                loading.close();
              }, 2000);
		}
    };
}();