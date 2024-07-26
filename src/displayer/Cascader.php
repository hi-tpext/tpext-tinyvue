<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasWhen;
use tpext\builder\traits\HasTreeData;

class Cascader extends Field
{
    use HasTreeData;
    use HasWhen;
    protected $view = 'cascader';

    protected $size = [2, 6];

    protected $placeholder = '';

    protected $jsOptions =  [
        'clearable' => true,
        'collapse-tags' => false,
        'popper-append-to-body' => true,
        'props' => [
            'children' => 'children',
            'label' => 'text',
            'value' => 'id',
            'expandTrigger' => 'click',
            'multiple' => false,
            'emitPath' => false,
        ],
        'separator' => '/',
        'show-all-levels' => true,
    ];

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

    protected function fieldScript()
    {
        $fieldId = $this->getId();

        $options = json_encode($this->options, JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$fieldId}Options = ref({$options});

EOT;
        $this->setupScript[] = $script;
        $this->addVueToken([
            "{$fieldId}Options",
        ]);

        $this->whenScript();
    }

    public function customVars()
    {
        return [
            'placeholder' => $this->placeholder ?: __blang('bilder_please_select') . $this->label
        ];
    }
}
