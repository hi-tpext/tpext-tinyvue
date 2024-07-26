<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasWhen;
use tpext\builder\traits\HasTreeData;

class SelectTree extends Field
{
    use HasTreeData;
    use HasWhen;
    protected $view = 'selecttree';

    protected $multiple = false;

    protected $placeholder = '';

    protected $checked = '';

    protected $jsOptions =  [
        'clearable' => true,
        'filterable' => true,
        //tree
        'value-field' => 'id',
        'text-field' => 'text',
        'render-type' => 'tree',
        'value-key' => 'id',
    ];

    //内置树的配置
    protected $treeJsOptions =  [
        'accordion' => false,//是否为手风琴模式，每次只打开一个同级树节点展开
        'check-on-click-node' => true,
        'check-strictly' => false, //[多选]是否严格的遵循父子节点不互相关联的原则，设为true后父节点选中状态会影响子节点的选中状态。
        'show-check-easily' => true,
        'show-line' => true,
        'expand-on-click-node' => false,
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

    /**
     * Undocumented function
     *
     * @param string|array|int $val
     * @return $this
     */
    public function default($val = '')
    {
        $this->default = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array $options
     * @return $this
     */
    public function treeJsOptions($options)
    {
        $this->treeJsOptions = array_merge($this->treeJsOptions, $options);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getTreeJsOptions()
    {
        return $this->treeJsOptions;
    }

    /**
     * Undocumented function
     *
     * @param bool $val
     * @return $this
     */
    public function multiple($val = true)
    {
        $this->multiple = $val;
        $this->valueType = $val ? 'array' : 'string';
        $this->jsOptions['multiple'] = $val;
        return $this;
    }

    protected function fieldScript()
    {
        $fieldId = $this->getId();

        $treeJsOptions = $this->treeJsOptions;
        $treeJsOptions['data'] = $this->options;

        $treeOp = json_encode($treeJsOptions, JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$fieldId}Options = ref({$treeOp});

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
