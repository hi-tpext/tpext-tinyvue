<?php

namespace tpext\builder\search;

use tpext\builder\common\Builder;
use tpext\builder\common\Module;
use tpext\builder\inface\Renderable;
use tpext\builder\traits\HasDom;
use tpext\builder\traits\HasOptions;
use tpext\think\View;

class TabLink implements Renderable
{
    use HasDom;
    use HasOptions;

    private $view = 'tab';

    protected $active = '';
    protected $id = '';
    protected $key = '';
    protected $searchId = '';

    public function getId()
    {
        if (empty($this->id)) {
            $this->id = 'tab' . mt_rand(1000, 9999);
        }

        return $this->id;
    }

    /**
     * Undocumented function
     *
     * @param string $id
     * @return $this
     */
    public function searchId($id)
    {
        $this->searchId = $id;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function key($val)
    {
        $this->key = $val;

        return $this;
    }

    /**
     * Undocumented function
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function active($val)
    {
        $this->active = $val;

        return $this;
    }

    public function getActive()
    {
        return $this->active ?: (array_keys($this->options)[0] ?? '');
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function beforRender()
    {
        $tabId = $this->getId();
        $serchId = $this->searchId;
        $active = $this->getActive();

        $script = <<<EOT

    const {$tabId}Op = ref({
        'active-name' : '{$active}',
        'position' : 'top',
        'size' : 'samll',
        'tab-style' : 'card',
        'tooltip-config' : {
            effect: 'light', 
            placement: 'left', 
            visible: 'auto',
        }
    });

    const {$tabId}Click = (opt) => {
        {$serchId}Data['{$this->key}'] = opt.name;
        {$serchId}Submit();
    };
    
EOT;
        Builder::getInstance()->addSetupScript($script);

        Builder::getInstance()->addVueToken([
            "{$tabId}Op",
            "{$tabId}Click",
        ]);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return string|View
     */
    public function render()
    {
        $template = Module::getInstance()->getViewsPath() . 'table' . DIRECTORY_SEPARATOR . $this->view . '.html';
        $vars = [
            'options' => $this->options,
            'active' => $this->active,
            'id' => $this->getId(),
            'class' => $this->class,
            'attr' => $this->getAttrWithStyle(),
        ];

        $viewshow = new View($template);
        return $viewshow->assign($vars)->getContent();
    }

    public function __toString()
    {
        return $this->render();
    }
}
