<?php

namespace tpext\builder\displayer;

class SwitchBtn extends Field
{
    protected $view = 'switchbtn';

    protected $pair = ['on' => 1, 'off' => 0];

    protected $default = 0;

    /**
     *
     * mini       设置是否显示为 mini 模式，mini 模式下不会显示 slot 的内容
     * show-text  switch 是否显示内容里面的文字
     * @var array
     */
    protected $jsOptions = [
        'mini' => true,
        'show-text' => true,
    ];

    /**
     * Undocumented function
     * @example 1 (1, 0) / ('yes', 'no') / ('on', 'off') etc...
     * @param string|mixed $on
     * @param string|mixed $off
     * @return $this
     */
    public function pair($on = 1, $off = 0)
    {
        $this->pair = ['on' => $on, 'off' => $off];

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getPair()
    {
        return $this->pair;
    }

    public function customVars()
    {
        return [
            'pair' => $this->pair,
        ];
    }
}
