<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasStorageDriver;
use tpext\builder\traits\HasImageDriver;
use tpext\builder\common\Module;

/**
 * MultipleFile class
 * @method $this  image()
 * @method $this  office()
 * @method $this  video()
 * @method $this  audio()
 * @method $this  pkg()
 */
class MultipleFile extends Field
{
    use HasStorageDriver;
    use HasImageDriver;

    protected $view = 'multiplefile';
    protected $placeholder = '';
    protected $canUpload = true;
    protected $showInput = true;
    protected $showChooseBtn = true;
    protected $showUploadBtn = true;
    protected $cover = '/assets/tpexttinyvue/images/cover/file.svg';
    protected $__default = '/assets/tpextbuilder/images/ext/0.png';

    protected $jsOptions = [
        'accept' => '', //mimeTypes
        'action' => '',
        'auto-upload' => true,
        'data' => [],
        'drag' => false,
        'file-list' => [],
        'is-hidden' => false,
        'list-type' => 'text',
        'max-name-length' => 20,
        'merge-service' => false,
        'multiple' => true,
        'name' => 'file',
        'open-download-file' => false,
        'paste-upload' => false,
        're-upload-tip' => '',
        're-uploadable' => true,
        'show-file-list' => true,
        'thumb-option' => [],
        'with-credentials' => false,
        //非组件参数
        'ext' => [
            //
            'jpg', 'jpeg', 'gif', 'wbmp', 'webp', 'png', 'bmp', 'ico', 'swf', 'psd', 'jpc', 'jp2', 'jpx', 'jb2', 'swc', 'iff', 'xbm', 'svg',
            //
            "flv", "mkv", "avi", "rm", "rmvb", "mpeg", "mpg", "ogv", "mov", "wmv", "mp4", "webm",
            //
            "ogg", "mp3", "wav", "mid",
            //
            "rar", "zip", "tar", "gz", "7z", "bz2", "cab", "iso",
            //
            "doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "txt", "md",
            //
            "xml", "json",
        ],
        'fileSingleSizeLimit' => 250 * 1024 * 1024,
        'fileNumLimit' => 5,
        'fileSizeLimit' => 0,
        'thumbnailWidth' => 80,
        'thumbnailHeight' => 80,
        'isImage' => false,
        'chooseUrl' => '',
        'chooseLayerSize' => ['98%', '98%']
    ];

    protected $extTypes = [
        'image' => ['jpg', 'jpeg', 'gif', 'wbmp', 'webp', 'png', 'bmp', 'ico', 'swf', 'psd', 'jpc', 'jp2', 'jpx', 'jb2', 'swc', 'iff', 'xbm', 'svg'],
        'office' => ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"],
        'video' => ["flv", "mkv", "avi", "rm", "rmvb", "mpeg", "mpg", "ogv", "mov", "wmv", "mp4", "webm"],
        'audio' => ["ogg", "mp3", "wav", "mid"],
        'pkg' => ["rar", "zip", "tar", "gz", "7z", "bz2", "cab", "iso"],
    ];

    protected $coverList = [
        'image' => '/assets/tpexttinyvue/images/cover/image.svg',
        'office' => '/assets/tpexttinyvue/images/cover/office.svg',
        'video' => '/assets/tpexttinyvue/images/cover/video.svg',
        'audio' => '/assets/tpexttinyvue/images/cover/audio.svg',
        'pkg' => '/assets/tpexttinyvue/images/cover/pkg.svg',
    ];

    public function created($type = '')
    {
        parent::created($type);

        $token = $this->getCsrfToken();
        $this->jsOptions['action'] = (string)url($this->getUploadUrl(), [
            'utype' => 'webuploader',
            'token' => $token,
            'driver' => $this->getStorageDriver(),
            'is_rand_name' => $this->isRandName(),
            'image_driver' => $this->getImageDriver(),
            'image_commonds' => $this->getImageCommands()
        ]);
        $this->jsOptions['chooseUrl'] = url(Module::getInstance()->getChooseUrl()) . '?';
    }

    /**
     * Undocumented function
     * 对老版本参数兼容
     * @param array $options
     * @return $this
     */
    public function jsOptions($options)
    {
        $newOptions = [];
        foreach ($options as $k => $v) {
            if ($k == 'limit') {
                $newOptions['fileNumLimit'] = $v;
            } else if ($k == 'mimeTypes' || $k == 'accept') {
                if ($v == '*/*') {
                    $v = '';
                }
                $newOptions['accept'] = $v;
            } else if ($k == 'upload_url') {
                $newOptions['action'] = $v;
            } else {
                $newOptions[$k] = $v;
            }
        }
        $this->jsOptions = array_merge($this->jsOptions, $newOptions);

        return $this;
    }

    /**
     * Undocumented function
     * 
     * @return bool
     */
    public function isInput()
    {
        return $this->canUpload;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function placeholder($val)
    {
        $this->placeholder = $val;
        return $this;
    }

    /**
     * 可以上传
     *
     * @param boolean $val
     * @return $this
     */
    public function canUpload($val = true)
    {
        $this->canUpload = $val;
        return $this;
    }

    /**
     * 是否显示文件输入框
     *
     * @param boolean $val
     * @return $this
     */
    public function showInput($val = true)
    {
        $this->showInput = $val;
        return $this;
    }

    /**
     * 是否显示[选择已上传文件]按钮
     *
     * @param boolean $val
     * @return $this
     */
    public function showChooseBtn($val = true)
    {
        $this->showChooseBtn = $val;
        return $this;
    }

    /**
     * 是否显示[上传新文件]按钮
     *
     * @param boolean $val
     * @return $this
     */
    public function showUploadBtn($val = true)
    {
        $this->showUploadBtn = $val;
        return $this;
    }

    /**
     * 同时禁用[上传新文件][选择已上传文件]
     * 可通过cover图片控制
     * 
     * @param boolean $val
     * @return $this
     */
    public function disableButtons($val = true)
    {
        $this->showUploadBtn = !$val;
        $this->showChooseBtn = !$val;

        return $this;
    }

    /**
     * 累计文件数量限制
     * 
     * @param int $val
     * @return $this
     */
    public function limit($val)
    {
        $this->jsOptions['limit'] = $val;
        return $this;
    }

    /**
     * 占位图片，设置为空则不显示
     *
     * @param string|false $val
     * @return $this
     */
    public function cover($val)
    {
        $this->cover = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function smallSize()
    {
        $this->jsOptions['thumbnailWidth'] = 50;
        $this->jsOptions['thumbnailHeight'] = 50;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function mediumSize()
    {
        $this->jsOptions['thumbnailWidth'] = 120;
        $this->jsOptions['thumbnailHeight'] = 120;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function bigSize()
    {
        $this->jsOptions['thumbnailWidth'] = 240;
        $this->jsOptions['thumbnailHeight'] = 240;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function largeSize()
    {
        $this->jsOptions['thumbnailWidth'] = 480;
        $this->jsOptions['thumbnailHeight'] = 480;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param integer $w
     * @param integer $h
     * @return $this
     */
    public function thumbSize($w, $h)
    {
        $this->jsOptions['thumbnailWidth'] = $w;
        $this->jsOptions['thumbnailHeight'] = $h;

        return $this;
    }

    /**
     * @return string|array
     */
    public function renderValue()
    {
        if (!is_null($this->renderValue)) {
            return $this->renderValue;
        }

        $this->canUpload = !$this->readonly && $this->canUpload;
        if (!$this->canUpload) {
            if (empty($this->default)) {
                $this->default = $this->__default;
            }
        }

        $value = !($this->value === '' || $this->value === null || $this->value === []) ? $this->value : $this->default;

        if (!is_array($value)) {
            $value = explode(',', $value);
        }

        if (count($value) > $this->jsOptions['fileNumLimit']) {
            $value = array_slice($value, 0, $this->jsOptions['fileNumLimit']);
        }

        $this->renderValue = implode(',', array_filter($value, 'strlen'));

        return $this->renderValue;
    }

    protected function fieldScript()
    {
        $fieldId = $this->getId();
        if ($this->disabled || $this->readonly || !$this->canUpload) {
            return;
        }
        $VModel = $this->getVModel();
        $fieldName = $this->getName();
        $hasCover = $this->cover ? 'true' : 'false';

        $script = <<<EOT

    const {$fieldId}Ref = ref(null);
    const {$fieldId}UploadRef = ref(null);
    const {$fieldId}UploadingNum = ref(0);
    const {$fieldId}HasCover = {$hasCover};
    let {$fieldId}Row = null;//如果是在items中，保持当前行的实例

    const {$fieldId}FileNum = computed({
        get() {
            return {$fieldId}Row ? {$fieldId}Row.{$fieldName}.split(',').filter(x => x.trim()).length : {$VModel}.split(',').filter(x => x.trim()).length;
        }
    });

    const {$fieldId}GetpreviewUrl = (url) => {
        if(__isImage(url, {$fieldId}Op.value)) {
            return url;
        }
        return '/index/file/extimg?type=' + url.replace(/.+?\.(\w+)$/, '$1');
    }

    const {$fieldId}UploadFile = (row) => {
        {$fieldId}Row = row;
        if({$fieldId}Op.value.fileNumLimit > 1 && {$fieldId}FileNum >= {$fieldId}Op.value.fileNumLimit) {
            TinyModal.message({ message: __blang.bilder_maximum_upload_files_num_is + {$fieldId}Op.value.fileNumLimit, status: 'warning', messageClosable: true });
            return false;
        }
        {$fieldId}UploadRef.value.click();
    };

    const {$fieldId}ChooseFile = (row) => {
        {$fieldId}Row = row;
        if({$fieldId}Op.value.fileNumLimit > 1 && {$fieldId}FileNum >= {$fieldId}Op.value.fileNumLimit) {
            TinyModal.message({ message: __blang.bilder_maximum_upload_files_num_is + {$fieldId}Op.value.fileNumLimit, status: 'warning', messageClosable: true });
            return false;
        }

        let chooseUrl = {$fieldId}Op.value.chooseUrl || '/admin/attachment/index?';
        let size = {$fieldId}Op.value.chooseLayerSize || ['98%', '98%'];

        layer.open({
            type: 2,
            title: __blang.bilder_choose_uploaded_file,
            shadeClose: false,
            scrollbar: false,
            shade: 0.3,
            anim: 2,    //从最底部往上滑入
            area: size,
            content: chooseUrl + 'choose=1&id={$fieldId}&limit=' + {$fieldId}Op.value.fileNumLimit + '&ext=' + {$fieldId}Op.value.ext.join(','),
            success: function (layero, index) {
                window.onChooseFile = (fileUrls) => {
                    {$fieldId}PushFiles(fileUrls);
                    nextTick(() => {
                        layer.close(index);
                    });
                };
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
    };

    const {$fieldId}RemoveFile = (row, index) => {
        {$fieldId}Row = row;
        TinyModal.confirm({
            title : __blang.bilder_operation_tips,
            message: __blang.bilder_confirm_to_remove_file,
            confirmContent: __blang.bilder_button_ok,
            cancelContent: __blang.bilder_button_cancel,
        })
        .then((res) => {
            if(res == 'confirm') {
                let files = {$fieldId}Row ? {$fieldId}Row.{$fieldName}.split(',').filter(x => x.trim()) : {$VModel}.split(',').filter(x => x.trim());
                files.splice(index, 1);
                if({$fieldId}Row) {
                    {$fieldId}Row.{$fieldName} = files.join(',');
                } else {
                    {$VModel} = files.join(',');
                }
            }
        });
    };

    const {$fieldId}BeforeAddFile = (callback) => {
        if({$fieldId}Op.value.fileNumLimit > 1 && {$fieldId}FileNum >= {$fieldId}Op.value.fileNumLimit) {
            TinyModal.message({ message: __blang.bilder_maximum_upload_files_num_is + {$fieldId}Op.value.fileNumLimit, status: 'warning', messageClosable: true });
            return false;
        }
        return true;
    };

    const {$fieldId}BeforeUpload = (file) => {
        return new Promise((resolve, reject) => {
            if({$fieldId}Op.value.fileNumLimit > 1 && {$fieldId}FileNum >= {$fieldId}Op.value.fileNumLimit) {
                TinyModal.message({ message: __blang.bilder_maximum_upload_files_num_is + {$fieldId}Op.value.fileNumLimit, status: 'warning', messageClosable: true });
                reject();
            }
            if({$fieldId}Op.value.fileSingleSizeLimit && file.size > {$fieldId}Op.value.fileSingleSizeLimit) {
                let limitSize = {$fieldId}Op.value.fileSingleSizeLimit > 1024 * 1024 ? ({$fieldId}Op.value.fileSingleSizeLimit/1024/1024).toFixed(2) + 'MB' : ({$fieldId}Op.value.fileSingleSizeLimit/1024).toFixed(2) +'KB';
                TinyModal.message({ message: __blang.bilder_file_size_cannot_exceed + ({$fieldId}Op.value.fileSingleSizeLimit / 1024) + 'kb' + __blang.bilder_please_upload_again, status: 'warning', messageClosable: true });
                reject();
            }
            let ext = file.name.replace(/.+?\.(\w+)$/, '$1');
            if(!{$fieldId}Op.value.ext.includes(ext)) {
                TinyModal.message({ message: file.name + __blang.bilder_file_type_suffix_allowed_is + ':' + {$fieldId}Op.value.ext.join(', '), status: 'warning', messageClosable: true });
                reject();
            }
            {$fieldId}Op.value.data = {
                name: file.name,
                size: file.size,
                type: file.type,
                lastModifiedDate: new Date(file.lastModified).toLocaleString()
            };
            {$fieldId}UploadingNum.value += 1;
            resolve();
        })
    };

    const {$fieldId}Error = (res , file, fileList) => {
        {$fieldId}UploadingNum.value -= 1;
        TinyNotify({
            type: 'error',
            message: __blang.bilder_file_uploading_failed,
            position: 'top-right',
            duration: 1500,
        });
    }

    const {$fieldId}Success = (res, file, fileList) => {
        {$fieldId}UploadingNum.value -= 1;
        {$fieldId}PushFiles(file.response.url);
        TinyNotify({
            type: 'success',
            message: __blang.bilder_file_uploading_succeeded,
            position: 'top-right',
            duration: 1500,
        });
    }

    const {$fieldId}Progress = (res, file) => {
        {$fieldId}UploadingNum.value = file.filter(x => x.status === 'uploading').length;
    }

    const {$fieldId}PushFiles = (urls) => {
        let arr = urls.split(',').filter(x => x.trim());
        if(!arr.length) {
            return;
        }
        if({$fieldId}Op.value.fileNumLimit < 2) {
            if({$fieldId}Row) {
                {$fieldId}Row.{$fieldName} = arr[0];
            }
            else {
                {$VModel} = arr[0];
            }
            return;
        }
        let files = {$fieldId}Row ? {$fieldId}Row.{$fieldName}.split(',').filter(x => x.trim()) : {$VModel}.split(',').filter(x => x.trim());
        arr.forEach(url => {
            if (files.length >= {$fieldId}Op.value.fileNumLimit) {
                return;
            }
            files.push(url);
        });
        if({$fieldId}Row) {
            {$fieldId}Row.{$fieldName} = files.join(',');
        } else {
            {$VModel} = files.join(',');
        }
    };

EOT;
        $this->setupScript[] = $script;
        $this->addVueToken([
            "{$fieldId}Ref",
            "{$fieldId}UploadRef",
            "{$fieldId}UploadFile",
            "{$fieldId}ChooseFile",
            "{$fieldId}RemoveFile",
            "{$fieldId}BeforeUpload",
            "{$fieldId}BeforeAddFile",
            "{$fieldId}Error",
            "{$fieldId}Success",
            "{$fieldId}Progress",
            "{$fieldId}GetpreviewUrl",
        ]);

        $script = <<<EOT

        //兼容jquery修改input的值 $('#inputid').val('url').trigger('change');
        $('#{$fieldId}-input-div').find('input').attr('id', '{$fieldId}');
        
EOT;

        $this->onMountedScript[] = $script;
    }

    public function customVars()
    {
        return [
            'canUpload' => $this->canUpload,
            'showInput' => $this->showInput,
            'cover' => $this->cover,
            'showChooseBtn' => $this->showChooseBtn,
            'showUploadBtn' => $this->showUploadBtn,
            'thumbnailStyle' => 'style="width:' . $this->jsOptions['thumbnailWidth'] . 'px;height:' . $this->jsOptions['thumbnailHeight'] . 'px;"',
            'placeholder' => $this->placeholder ?: __blang('bilder_please_select') . $this->label
        ];
    }

    /**
     * Undocumented function
     *
     * @param string|array $types ['jpg', 'jpeg', 'gif'] or 'jpg,jpeg,gif'
     * @return $this
     */
    public function extTypes($types)
    {
        $this->jsOptions['ext'] = is_string($types) ? explode(',', $types) : $types;
        return $this;
    }

    public function __call($name, $arguments)
    {
        if (isset($this->extTypes[$name])) {
            $this->jsOptions['ext'] = $this->extTypes[$name];
            if ($this->cover) {
                $this->cover = $this->coverList[$name];
            }
            return $this;
        }

        throw new \InvalidArgumentException(__blang('bilder_invalid_argument_exception') . ' : ' . $name);
    }
}