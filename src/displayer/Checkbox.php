<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasWhen;
use tpext\builder\traits\HasOptions;

class Checkbox extends Field
{
    use HasOptions;
    use HasWhen;

    protected $view = 'checkbox';

    protected $valueType = 'array';

    protected $checkallBtn = '';

    protected $default = [];

    protected $value = [];

    protected $checked = [];

    protected $disabledOptions = [];

    protected $blockStyle = false;

    /**
     * min        可被勾选的 checkbox 的最小数量
     * max        可被勾选的 checkbox 的最大数量
     * text-color 按钮形式的 checkbox 激活时的文本颜色
     * fill       复选框组子项组件类型，需配合 options 属性使用
     * @var array
     */
    protected $jsOptions = [
        'vertical' => false,
        'min' => 0,
        'max' => 9999,
        'text-color' => '',
        'fill' => '',
        'size' => 'mini',
    ];

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function inline($val = true)
    {
        $this->jsOptions['vertical'] = !$val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function blockStyle($val = true)
    {
        $this->blockStyle = $val;
        $this->jsOptions['type'] = $val ? 'button' : 'checkbox';
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
     * @deprecated 和 disabledOptions 功能相同
     * @param string|array $val
     * @return $this
     */
    public function readonlyOptions($val)
    {
        $this->disabledOptions = is_array($val) ? $val : explode(',', $val);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function checkallBtn($val = '全选')
    {
        $this->checkallBtn = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array|string $val
     * @return $this
     */
    public function default($val = [])
    {
        $this->default = is_array($val) ? $val : explode(',', $val);
        return $this;
    }

    protected function checkboxOptions()
    {
        $options = [];

        foreach ($this->options as $key => $label) {
            $options[] = [
                'label' => (string)$key,
                'text' => $label,
                'disabled' => in_array($key, $this->disabledOptions) || $this->readonly,
            ];
        }

        return $options;
    }

    protected function fieldScript()
    {
        $fieldId = $this->getId();
        $VModel = $this->getVModel();

        $options = json_encode($this->inTable ? [] : $this->checkboxOptions(), JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$fieldId}Options = ref({$options});
    const {$fieldId}Indeterminate = computed({
        get() {
            return {$VModel}.length > 0 && {$VModel}.length !== {$fieldId}Options.value.length;
        }
    });

    const {$fieldId}CheckAll = computed({
        get() {
            return {$VModel}.length > 0 && {$VModel}.length === {$fieldId}Options.value.length;
        },
        set(val) {
            if (val) {
                {$VModel} = [...{$fieldId}Options.value.map(x => x.label)];
            } else {
                {$VModel} = [];
            }
        }
    });

EOT;
        $this->setupScript[] = $script;
        $this->addVueToken([
            "{$fieldId}Options",
            "{$fieldId}Indeterminate",
            "{$fieldId}CheckAll",
        ]);

        $this->whenScript();
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function customVars()
    {
        return [
            'blockStyle' => $this->blockStyle,
            'checkallBtn' => $this->checkallBtn,
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
        $info['options'] = $this->checkboxOptions();

        return $info;
    }
}
