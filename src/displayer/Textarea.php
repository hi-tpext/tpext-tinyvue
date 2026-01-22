<?php

namespace tpext\builder\displayer;

class Textarea extends Field
{
    protected $view = 'textarea';

    protected $placeholder = '';

    /**
     *
     * rows            输入框行数
     * maxlength 　    最大输入长度
     * show-word-limit 是否显示字数统计
     * @var array
     */
    protected $jsOptions = [
        'maxlength' => '',
        'rows' => 3,
        'show-word-limit' => false,
        'clearable' => true,
    ];

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
     * @param integer $val
     * @return $this
     */
    public function rows($val = 3)
    {
        $this->jsOptions['rows'] = $val;
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

    public function customVars()
    {
        return [
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
