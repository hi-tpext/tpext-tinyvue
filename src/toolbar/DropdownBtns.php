<?php

namespace tpext\builder\toolbar;

use tpext\builder\common\Builder;

class DropdownBtns extends Bar
{
    protected $view = 'dropdownbtns';

    protected $items = [];

    /**
     * Undocumented function
     *
     * @param array $items
     * @return $this
     */
    public function items($items)
    {
        $this->items = $items;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getItems()
    {
        return $this->items;
    }

    public function isEmpty()
    {
        return empty($this->items);
    }

    protected function buttonScript()
    {
        $btnId = $this->getId();
        $table = $this->tableId;

        $script = <<<EOT

    let {$btnId}Name = '{$this->name}';
    let {$btnId}PostUrl = '{$this->href}';
    
    const {$btnId}ButtonClick = () => {
        if({$btnId}Name == 'exports') {
            {$table}ExportData({$btnId}PostUrl, '');
        }
    };

    const {$btnId}ItemClick = (data) => {
        if({$btnId}Name == 'exports') {
            {$table}ExportData({$btnId}PostUrl, data.itemData);
        }
    };

    const {$btnId}Op = ref({
        'visible-arrow' : true,
        'split-button' : true,
        'inherit-width' : true,
        'size' : 'small',
        'trigger' : 'hover',
        'type' : '{$this->type}' || 'default',
        'round' : false,
        'border' : true,
    });

EOT;
        $this->setupScript[] = $script;

        Builder::getInstance()->addVueToken(["{$btnId}Op", "{$btnId}ButtonClick", "{$btnId}ItemClick"]);

        return $script;
    }

    public function beforRender()
    {
        $this->buttonScript();

        return parent::beforRender();
    }

    /**
     * Undocumented function
     *
     * @return mixed
     */
    public function render()
    {
        $vars = $this->commonVars();

        $actions = [];

        $items = $this->getItems();

        foreach ($items as $key => $it) {
            if (is_string($it)) {
                $it = ['label' => $it];
            }
            $data = array_merge(
                [
                    'key' => $key,
                    'label' => '',
                    'icon' => '',
                    'attr' => '',
                    'class' => '',
                ],
                $it
            );

            $actions[$key] = $data;
        }

        $vars = array_merge($vars, [
            'items' => $actions,
        ]);

        $viewshow = $this->getViewInstance();

        return $viewshow->assign($vars)->getContent();
    }
}
