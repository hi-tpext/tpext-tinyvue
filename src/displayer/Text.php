<?php

namespace tpext\builder\displayer;

class Text extends Field
{
    protected $view = 'text';

    protected $prepend = '';

    protected $append = '';

    protected $prefix = '';

    protected $suffix = '';

    protected $placeholder = '';

    /**
     *
     * maxlength 　    最大输入长度
     * show-word-limit 是否显示字数统计
     * @var array
     */
    protected $jsOptions = [
        'maxlength' => '',
        'show-word-limit' => false,
        'clearable' => false,
    ];

    /**
     * Undocumented function
     *
     * @param string $val from | table | search
     * @return $this
     */
    public function setFormMode($val)
    {
        parent::setFormMode($val);
        if ($val == 'table') {
            $this->jsOptions['clearable'] = false;
        }
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param integer $val
     * @return $this
     */
    public function maxlength($val = 0)
    {
        $this->jsOptions['maxlength'] = $val;
        $this->jsOptions['show-word-limit'] = $val > 0;
        return $this;
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
     * @param string $html
     * @return $this
     */
    public function after($html)
    {
        $this->suffix = $html;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $html
     * @return $this
     */
    public function beforSymbol($html)
    {
        $this->prepend = $html;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $html
     * @return $this
     */
    public function afterSymbol($html)
    {
        $this->append = $html;
        return $this;
    }

    public function customVars()
    {
        return [
            'prepend' => $this->prepend,
            'append' => $this->append,
            'prefix' => $this->prefix,
            'suffix' => $this->suffix,
            'placeholder' => $this->placeholder ?: __blang('builder_please_enter') . $this->label
        ];
    }

    protected function fieldScript()
    {
        //Blur事件处理 table中的 autoPost 
        $fieldId = $this->getId();
        $VModel = $this->getVModel();
        $fieldName = $this->getName();
        $url = $this->autoPost['url'] ?? '';
        $refresh = isset($this->autoPost['refresh']) && $this->autoPost['refresh'] ? 'true' : 'false';

        $table = '';
        $eventKey = '';
        if ($this->formMode == 'table') {
            $table = $this->getForm()->getTableId();
            $eventKey = $table . preg_replace('/\W/', '_', $fieldName) . 'Change';
        }

        $script = <<<EOT

    const {$fieldId}Blur = (row, e) => {
        if('{$table}') {
            if({$eventKey}Timer) {
                clearTimeout({$eventKey}Timer);
                {$eventKey}Timer = null;
            }
            {$eventKey}Timer = setTimeout(() => {
                if({$table}ActiveRowChanged['{$fieldName}']!== undefined) {
                    {$table}ActiveRowChanged['{$fieldName}'] = undefined;
                    let params = {
                        id: row.__pk__,
                        name: '{$fieldName}',
                        value: {$VModel},
                    };
                    {$table}SendData('{$url}', params, $refresh);
                }
            }, 500);
        }
    };

EOT;
        $this->setupScript[] = $script;

        $this->addVueToken([
            "{$fieldId}Blur",
        ]);
    }
}
