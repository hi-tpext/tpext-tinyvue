<?php

namespace tpext\builder\displayer;

class Divider extends Field
{
    protected $view = 'divider';

    protected $input = false;

    protected $jsOptions = [
        'border-style' => 'solid',
        'color' => '',
        'content-background-color' => '',
        'content-color' => '',
        'content-position' => 'center',
        'direction' => 'horizontal',
    ];

    public function created($type = '')
    {
        parent::created($type);

        $this->value = $this->label ? $this->label : $this->name;

        $this->name = '__divider' . mt_rand(100, 999);

        $this->label = '';
    }
}
