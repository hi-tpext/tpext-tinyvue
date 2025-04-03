<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasOptions;
use tpext\builder\traits\HasWhen;

class Select extends Field
{
    use HasOptions;
    use HasWhen;

    protected $view = 'select';

    protected $group = false;

    protected $placeholder = '';

    /**
     * Undocumented variable
     *
     * @var Select
     */
    protected $prevSelect = null;
    protected $nextSelectId = null;
    protected $withParams = [];
    protected $checked = '';
    protected $disabledOptions = [];
    protected $ajax = [];
    protected $prefix = '';

    /**
     *
     * @var array
     */
    protected $jsOptions = [
        'clearable' => true,
        'filterable' => true,
        'is-drop-inherit-width' => true,
        'loading' => false,
        'remote' => false,
        'searchable' => false,
        'remote-config' => [
            'autoSearch' => true,
            'clearData' => true,
            'showIcon' => true
        ]
    ];

    /**
     * Undocumented function
     * @deprecated 
     * @param boolean $use
     * @return $this
     */
    public function select2($use)
    {
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $html
     * @return $this
     */
    public function befor($html)
    {
        $this->prefix = $html;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $url
     * @param string $textField text|name
     * @param string $idField
     * @return $this
     */
    public function dataUrl($url, $textField = '', $idField = '')
    {
        $this->ajax = [
            'url' => (string)$url,
            'id' => $idField,
            'text' => $textField,
        ];

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string|array $val
     * @return $this
     */
    public function disabledOptions($val)
    {
        $this->disabledOptions = is_array($val) ? $val : explode(',', $val);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function isAjax()
    {
        return !empty($this->ajax);
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function placeholder($val)
    {
        $this->jsOptions['placeholder'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getAjax()
    {
        return $this->ajax ?: ['url' => '', 'text' => ''];
    }

    /**
     * Undocumented function
     * 
     * $form->select('province', '省份', 4)->dataUrl(url('province'))->withNext(
     *   $form->select('city', '城市', 4)->dataUrl(url('city'))->withNext(
     *       $form->select('area', '区域', 4)->dataUrl(url('area'))
     *   )
     * );
     *
     * @param Select $nextSelect
     * @return $this
     */
    public function withNext($nextSelect)
    {
        $nextSelect->withPrev($this);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function extKey($val)
    {
        parent::extKey($val);
        if ($this->prevSelect) {
            $this->prevSelect->nextSelectId($this->getId());
        }
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val a or a.b.c
     * @return $this
     */
    public function name($val)
    {
        parent::name($val);
        if ($this->prevSelect) {
            $this->prevSelect->nextSelectId($this->getId());
        }
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param Select $prevSelect
     * @return $this
     */
    public function withPrev($prevSelect)
    {
        $prevSelect->nextSelectId($this->getId());
        $this->prevSelect = $prevSelect;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $nextSelectId
     * @return $this
     */
    public function nextSelectId($nextSelectId)
    {
        $this->nextSelectId = $nextSelectId;
        return $this;
    }

    /**
     * ajax 时，附带其他字段的值。
     * 与级联有所不同，级联时上级改变会清空下级，并重新加载。
     * 附带字段的值改变不会触发此控件的重新加载，只是在此控件重新加载的时候附加参数。
     * @param array|string $val
     * @return $this
     */
    public function withParams($val)
    {
        $this->withParams = is_array($val) ? $val : explode(',', $val);

        return $this;
    }

    protected function selectOptions()
    {
        $fieldId = $this->getId();

        $options = [];

        foreach ($this->options as $key => $option) {
            if (isset($option['options']) && isset($option['label'])) {
                //分组必须使用 tiny-option-group 组件，暂不支持配置:options，无法虚拟滚动优化性能
                // $optionsSub = [];
                // foreach ($option['options'] as $subKey => $subOption) {
                //     $optionsSub[] = [
                //         'value' => (string)$subKey,
                //         'label' => $subOption,
                //         'disabled' => $option['disabled'] ?? (in_array($subKey, $this->disabledOptions) || $this->readonly),
                //     ];
                // }
                // $options[] = [
                //     'label' => $option['label'],
                //     'options' => $optionsSub,
                // ];

                $options[] = [
                    'value' => $fieldId . '-' . $key,
                    'label' => $option['label'],
                    'disabled' => true,
                    'icon' => 'i'
                ];
                foreach ($option['options'] as $subKey => $subOption) {
                    $options[] = [
                        'value' => (string)$subKey,
                        'label' => $subOption,
                        'disabled' => $option['disabled'] ?? (in_array($subKey, $this->disabledOptions) || $this->readonly),
                    ];
                }
            } else {
                $options[] = [
                    'value' => (string)$key,
                    'label' => $option,
                    'disabled' => in_array($key, $this->disabledOptions) || $this->readonly,
                ];
            }
        }

        return $options;
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    protected function fieldScript()
    {
        $fieldId = $this->getId();
        $VModel = $this->getVModel();

        //可能会rendering动态修改每一行的选项，故把选项值存在这一行中
        $options = json_encode($this->inTable ? [] : $this->selectOptions(), JSON_UNESCAPED_UNICODE);
        $triggerNext = $this->nextSelectId ? "{$this->nextSelectId}Reset(row);" : '';

        $script = <<<EOT

    const {$fieldId}Options = ref({$options});
    const {$fieldId}Error = ref('');
    let {$fieldId}Row = null;//如果是在items中，保持当前行的实例

    const {$fieldId}Change = (value, list) => {
        let row = {$fieldId}Row;
        {$triggerNext}
    };

    const {$fieldId}Focus = (row, e) => {
        if(row) {
            {$fieldId}Row = row;
        }
    };

    const {$fieldId}Reset = (row) => {
        if(row) {
            {$fieldId}Row = row;
        }
        {$VModel} = '';
        {$triggerNext}
    };

EOT;
        $this->setupScript[] = $script;

        $this->addVueToken([
            "{$fieldId}Options",
            "{$fieldId}Change",
            "{$fieldId}Focus",
            "{$fieldId}Error",
        ]);

        //远程加载
        if (!empty($this->ajax)) {
            $this->remoteScript();
            $this->jsOptions['filterable'] = true;
            $this->jsOptions['remote'] = true;
        } else {
            if (!$this->inTable) {
                $this->jsOptions['filterable'] = count($this->options) > 6;
            }
            $this->jsOptions['remote'] = false;
        }

        $this->whenScript();
    }

    protected function remoteScript()
    {
        $fieldId = $this->getId();
        $VModel = $this->getVModel();
        $formVModel =   $this->getFormVModel();
        $fieldName = $this->getName();

        $url = $this->ajax['url'];
        $id = $this->ajax['id'] ?: '_';
        $text = $this->ajax['text'] ?: '_';
        $formMode = $this->formMode;
        $inTable = $this->inTable ? 'true' : 'false';
        $prevId = $this->prevSelect ? $this->prevSelect->getId() : '';
        $prevVModel = $this->prevSelect ? $this->prevSelect->getVModel() : '""';

        $withParams = json_encode($this->withParams);

        $script = <<<EOT

    const {$fieldId}LoadData = (selected) => {
        let params = {
            q: '',
            page: 1,
            selected : selected,
            ele_id : '{$fieldId}',
            prev_ele_id : '{$prevId}',
            idField : '{$id}' == '_' ? null : '{$id}',
            textField : '{$text}' == '_' ? null : '{$text}'
        };
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: '{$url}',
                responseType: 'json',
                params: params,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                timeout: 60000,
            }).then(res => {
                let list = (res.data.data || res.data || []).map(x => { 
                    return {
                        value: '' + (x.__id__ || x['{$id}'] || x.id),
                        label: x.__text__ || x['{$text}'] || x.text,
                        disabled: false,
                    };
                });
                return resolve(list);
            })
            .catch(e => {
                {$fieldId}Error.value = __blang.bilder_network_error;
                throw e;
            });
        });
    };

    let {$fieldId}Page = 1;
    let {$fieldId}Query = '!@#$%^&*()_+';
    let {$fieldId}WithParams = {$withParams};
    let {$fieldId}NewData = false;
    const {$fieldId}InTable = {$inTable};

    if('{$formMode}' == 'search' && !'{$prevId}') {
        {$fieldId}LoadData({$VModel}).then(options => {
            {$fieldId}Options.value = options;
        });
    } else if('{$formMode}' == 'form' && !{$fieldId}InTable) {
        if({$VModel} !== '') {
            {$fieldId}LoadData({$VModel}).then(options => {
                {$fieldId}Options.value = options;
                if(options.length == 0) {
                    {$VModel} = {$fieldId}Op.value.multiple ? [] : '';
                }
            });
        }
    }

    const {$fieldId}QueryData = (query) => {
        if(!query || query != {$fieldId}Query) {
            {$fieldId}Page = 1;
            {$fieldId}Query = query;
            {$fieldId}NewData = true;
        } else {
            {$fieldId}NewData = false;
        }

        let row = {$fieldId}Row;

        let params = {
            q: query,
            page: {$fieldId}Page,
            prev_val : {$prevVModel},
            ele_id : '{$fieldId}',
            prev_ele_id : '{$prevId}',
            idField : '{$id}' == '_' ? null : '{$id}',
            textField : '{$text}' == '_' ? null : '{$text}'
        };

        if({$fieldId}WithParams.length) {
            {$fieldId}WithParams.forEach(function(key) {
                if(key.indexOf('.') > 0) {
                    let keys = key.split('.');
                    let val = {$formVModel};
                    for(let i = 0; i < keys.length; i+=1) {
                        val = val[keys[i]];
                    }
                    params[key] = val;
                } else {
                    params[key] = {$formVModel}[key];
                }
            });
        }

        axios({
            method: 'get',
            url: '{$url}',
            responseType: 'json',
            params: params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 60000,
        }).then(res => {
            let list = (res.data.data || res.data || []).map(x => { 
                return {
                    value: '' + (x.__id__ || x['{$id}'] || x.id),
                    label: x.__text__ || x['{$text}'] || x.text,
                    disabled: false,
                };
            });
            if({$fieldId}NewData) {
                {$fieldId}Options.value = list;
            } else {
                {$fieldId}Options.value.push(...list);
            }
        })
        .catch(e => {
            {$fieldId}Error.value = __blang.bilder_network_error;
            throw e;
        });
    };
    
    {$fieldId}Op.value['remote-method'] = {$fieldId}QueryData;

     watch(
        {$fieldId}Options,
        (newValue, oldValue) => {
            if({$fieldId}Row) {
                {$fieldId}Row.__field_info__['{$fieldName}'].options = newValue;
            }
        }
    );
    
EOT;

        $this->onMountedScript[] = $script;
    }

    /**
     * 在列表中时初始化脚本
     * @return string
     */
    public function getInitRowScript()
    {
        if (empty($this->ajax)) {
            return '';
        }

        $fieldName = $this->getName();
        $fieldId = $this->getId();

        $script = <<<EOT
        
        if(row.{$fieldName} !== '') {
            {$fieldId}LoadData(row.{$fieldName}).then(options => {
                row.__field_info__['{$fieldName}'].options = options;
                {$fieldId}Options.value = options;
                if(options.length == 0) {
                    row.{$fieldName} = '';
                }
            });
        }
EOT;

        return $script;
    }

    protected function isGroup()
    {
        foreach ($this->options as $option) {

            if (isset($option['options']) && isset($option['label'])) {
                $this->group = true;
                break;
            }
        }

        return $this->group;
    }

    public function customVars()
    {
        return [
            'group' => false, // $this->isGroup(),
            'prefix' => $this->prefix,
            'remote' => $this->isAjax(),
            'placeholder' => $this->placeholder ?: __blang('bilder_please_select') . $this->label
        ];
    }

    /**
     * Undocumented function
     * 
     * @return array
     */
    public function fieldInfo()
    {
        $info = parent::fieldInfo();
        $info['options'] = $this->selectOptions();

        return $info;
    }

    public function destroy()
    {
        $this->prevSelect = null;
        parent::destroy();
    }
}
