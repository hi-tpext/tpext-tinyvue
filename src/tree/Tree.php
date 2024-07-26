<?php

namespace tpext\builder\tree;

use tpext\builder\traits\HasTreeData;
use think\Collection;
use tpext\think\View;
use tpext\builder\common\Module;
use tpext\builder\common\Widget;
use tpext\builder\traits\HasDom;
use tpext\builder\common\Builder;
use tpext\builder\inface\Renderable;

class Tree extends Widget implements Renderable
{
    use HasTreeData;
    use HasDom;

    protected $onClick = 'alert("`onClick` event was not binded, clicked : "+currentChecked.checkedKeys.join(","));';

    protected $trigger = '';

    protected $id = 'theTree';

    protected $partial = false;

    protected $expandAll = false;

    protected $view = 'tree';

    protected $multiple = false;

    protected $maxHeight = '100%';

    protected $rootText = '';

    protected $jsOptions =  [
        'accordion' => false, //是否为手风琴模式，每次只打开一个同级树节点展开
        'check-on-click-node' => true,
        'check-strictly' => false, //[多选]是否严格的遵循父子节点不互相关联的原则，设为true后父节点选中状态会影响子节点的选中状态。
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
     * @param array $options
     * @return $this
     */
    public function jsOptions($options)
    {
        $this->jsOptions = array_merge($this->jsOptions, $options);
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
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param integer|string $val
     * @return $this
     */
    public function maxHeight($val = '100%')
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
    public function partial($val = true)
    {
        $this->partial = $val;
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
     * @param string $val
     * @return $this
     */
    public function setId($val)
    {
        $this->id = $val;
        return $this;
    }

    /**
     * Undocumented function
     * 
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Undocumented function
     *
     * @param array|Collection|\IteratorAggregate $val [[id,text,children],...]
     * @return $this
     */
    public function data($val)
    {
        $this->options = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    protected function isReadonly()
    {
        return false;
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    protected function isDisabled()
    {
        return false;
    }

    /**
     * Undocumented function
     *
     * @param array|Collection|\IteratorAggregate $treeData
     * @param string $textField
     * @param string $idField
     * @param string $pidField
     * 
     * @return $this
     */
    public function fill($treeData, $textField = 'name', $idField = 'id', $pidField = 'parent_id', $rootText = '全部')
    {
        if ($rootText == '全部') {
            $rootText = __blang('bilder_left_tree_text_all');
        }

        $this->rootText = $rootText;
        $this->optionsData($treeData, $textField, $idField, $pidField);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $script
     * @return $this
     */
    public function onClick($script)
    {
        $this->onClick = $script;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    protected function treeScript()
    {
        if ($this->maxHeight) {
            $this->addStyle('max-height:' . $this->maxHeight . 'px;overflow:scroll;');
        }

        $treeId = $this->id;

        if ($this->multiple) {
            $this->jsOptions['show-checkbox'] = true;
            $this->jsOptions['show-radio'] = false;
        } else {
            $this->jsOptions['show-checkbox'] = false;
            $this->jsOptions['show-radio'] = false;
        }

        if (!$this->multiple && $this->rootText) {
            $this->options = array_merge([['id' => '__root__', 'text' => $this->rootText]], $this->options);
        }

        $configs = json_encode($this->jsOptions, JSON_UNESCAPED_UNICODE);
        $options = json_encode($this->options, JSON_UNESCAPED_UNICODE);

        $multiple = $this->multiple ? 'true' : 'false';

        $script = <<<EOT

    const {$treeId}Ref = ref(null);
    const {$treeId}Op = ref({$configs});
    const {$treeId}Options = ref({$options});
    const {$treeId}multiple = {$multiple};

    const {$treeId}NodeCheck = (data, currentChecked) => {
        {$this->onClick}
    };

    {$treeId}Op.value.icon = TinyIcon.iconRightO();

EOT;
        Builder::getInstance()->addSetupScript($script);
        Builder::getInstance()->addVueToken([
            "{$treeId}Ref",
            "{$treeId}Op",
            "{$treeId}Options",
            "{$treeId}NodeCheck",
        ]);
    }

    /**
     * Undocumented function
     *
     * @param string $field
     * @param string $searchId
     * @return $this;
     */
    public function trigger($field, $searchId)
    {
        $treeId = $this->id;
        $this->trigger = $field;

        $this->onClick = <<<EOT
        
        if(data.id === '__root__') {
            {$searchId}Data['{$field}'] = '';
        } else {
            {$searchId}Data['{$field}'] = {$treeId}multiple ? currentChecked.checkedKeys : data.id;
        }
        {$searchId}Submit();
EOT;
        return $this;
    }

    public function beforRender()
    {
        $this->treeScript();
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function render()
    {
        $template = Module::getInstance()->getViewsPath() . 'tree' . DIRECTORY_SEPARATOR . 'tree.html';

        $viewshow = new View($template);

        $vars = [
            'class' => $this->class,
            'attr' => $this->getAttrWithStyle(),
            'id' => $this->id,
        ];

        if ($this->partial) {
            return $viewshow->assign($vars);
        }

        return $viewshow->assign($vars)->getContent();
    }
}
