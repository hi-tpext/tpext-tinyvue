(function (w) {

    w.layerOpenLink = (href, title, size) => {
        var a = document.createElement("a");
        $(a).data('url', href);
        $(a).data('title', title);
        $(a).data('layer-size', size);
        w.layerOpen(a);
    };

    w.layerOpen = (obj, size, url) => {
        var href = url || $(obj).data('url') || $(obj).attr('url') || $(obj).attr('href');
        var text = $(obj).data('title') || $(obj).attr('title') || $(obj).text();
        if ($(obj).data('layer-size')) {
            size = $(obj).data('layer-size').split(',');
        }
        var winheight = $(window).height() - 14;
        layer.open({
            type: 2,
            title: text,
            shadeClose: false,
            scrollbar: false,
            maxmin: true,
            anim: 5,    //渐显
            shade: 0.3,
            maxHeight: winheight,
            area: size || ['90%', '400'],
            offset: size && size.length > 1 & size[1] == '100%' ? '0' : '7px',
            content: href,
            success: function (layero, index) {
                if (!size || size[1] == 'auto' || size[1] == '' || size[1] == '0') {
                    var iframe = layero.find('iframe').get(0);

                    var mainheight = $(iframe.contentWindow.document.body).find('.panel-default.content').height() + 10;
                    if (mainheight < 400) {
                        mainheight = 400;
                    }
                    if (mainheight > winheight - 43) {
                        mainheight = winheight - 43;
                    }
                    $(iframe).height(mainheight);
                    //layero.css('top', ((winheight - mainheight - 43) / 2) + 'px');
                    layer.iframeAuto(index);
                }

                $(':focus').blur();
                this.enterEsc = function (event) {
                    if (event.keyCode === 13) {
                        return false; //阻止系统默认回车事件
                    }
                    if (event.keyCode === 0x1B) {
                        var index2 = layer.msg(__blang.bilder_confirm_close_this_window, {
                            time: 2000,
                            btn: [__blang.bilder_button_ok, __blang.bilder_button_cancel],
                            yes: function (params) {
                                layer.close(index);
                                layer.close(index2);
                            }
                        });
                        return false; //阻止系统默认esc事件
                    }
                };
                $(document).on('keydown', this.enterEsc);	//监听键盘事件，关闭层
            },
            end: function () {
                $(document).off('keydown', this.enterEsc);	//解除键盘关闭事件
            }
        });

        return false;
    };

    w.layerCloseWindow = () => {
        if (window !== top && parent.layer) {
            parent.layer.close(parent.layer.getFrameIndex(w.name));
        }
    }

    w.closeLayer = (msg, style) => {
        if (parent && parent.layer) {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
            w.ayerCloseWindow();
        } else {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
        }
    };

    w.closeLayerRefresh = (msg, style) => {
        if (parent && parent.layer) {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
            if (parent.refreshTable) {
                parent.refreshTable();
            } else {
                setTimeout(() => parent.location.reload(), 1000);
            }
            w.layerCloseWindow();
        } else {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
        }
    };

    w.closeLayerGo = (msg, url, style) => {
        if (parent && parent.layer) {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
            if (parent.layer) {
                setTimeout(() => parent.location.replace(url), 1000);
                w.layerCloseWindow();
            }
        } else {
            parent.TinyNotify({
                type: style,
                message: msg,
                position: 'top-right',
                duration: 2000,
            });
        }
    };

})(window);