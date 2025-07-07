<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasTreeData;

class Tree extends Field
{
    use HasTreeData;
    protected $view = 'tree';

    protected $multiple = true;

    protected $maxHeight = 400;

    protected $enableCheck = true;

    protected $postAsString = false;

    /**
     * Undocumented variable
     *
     * @var array|string
     */
    protected $checked = [];

    protected $jsOptions =  [
        'accordion' => false, //是否为手风琴模式，每次只打开一个同级树节点展开
        'check-on-click-node' => true,
        'check-strictly' => true, //[多选]是否严格的遵循父子节点不互相关联的原则，设为true后父节点选中状态不会影响子节点的选中状态。。
        'default-expand-all' => true,
        'default-expanded-keys' => [],
        'delete-disabled-keys' => [],
        'node-key' => 'id',
        'props' => [
            'children' => 'children',
            'label' => 'text',
            'disabled' => 'disabled',
        ],
        'show-check-easily' => true,
        'show-line' => false,
        'expand-on-click-node' => false,
    ];

    /**
     * Undocumented function
     *
     * @param array|string|int $val
     * @return $this
     */
    public function default($val = [])
    {
        $this->default = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function enableCheck($val = true)
    {
        $this->enableCheck = $val;
        return $this;
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
        return $this;
    }

     /**
     * 多选时，是否父子节点不级联
     * @param bool $val
     * @return $this
     */
    public function noCascaded($val = true)
    {
        $this->jsOptions['check-strictly'] = $val;

        return $this;
    }

    /**
     * 提交时是否把数组转成字符串
     * 
     * @param boolean $val
     * @return $this
     */
    public function postAsString($val = true)
    {
        $this->postAsString = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param integer|string $val
     * @return $this
     */
    public function maxHeight($val = 800)
    {
        $this->maxHeight = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function expandAll($val = true)
    {
        $this->jsOptions['default-expand-all'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    protected function fieldScript()
    {
        $value = $this->renderValue();
        $this->jsOptions['default-checked-keys'] = $this->multiple ? $value : [$value];

        if (!$this->readonly && $this->maxHeight) {
            $this->addStyle('max-height:' . $this->maxHeight . 'px;overflow:scroll;');
        }

        $fieldId = $this->getId();
        $VModel = $this->getVModel();

        if (!$this->enableCheck || $this->readonly || $this->disabled) {
            $this->jsOptions['show-checkbox'] = false;
            $this->jsOptions['show-radio'] = false;
        } else {
            if ($this->multiple) {
                $this->jsOptions['show-checkbox'] = true;
                $this->jsOptions['show-radio'] = false;
            } else {
                $this->jsOptions['show-checkbox'] = false;
                $this->jsOptions['show-radio'] = false;
            }
        }

        $options = json_encode($this->options, JSON_UNESCAPED_UNICODE);

        $multiple = $this->multiple ? 'true' : 'false';

        $script = <<<EOT

    const {$fieldId}Options = ref({$options});
    const {$fieldId}Multiple = {$multiple};

    const {$fieldId}NodeCheck = (data, currentChecked) => {
        {$VModel} = {$fieldId}Multiple ? currentChecked.checkedKeys : data.id;
    };

EOT;
        $this->setupScript[] = $script;
        $this->addVueToken([
            "{$fieldId}Options",
            "{$fieldId}NodeCheck",
        ]);

        if ($this->postAsString) {
            $VModel = $this->getVModel();

            $script = <<<EOT

        if (Array.isArray({$VModel})) {
            {$VModel} = {$VModel}.join(',');
        }

EOT;
            $this->convertScript[] = $script;
        }
    }
}
