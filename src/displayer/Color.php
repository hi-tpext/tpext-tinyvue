<?php

namespace tpext\builder\displayer;

class Color extends Text
{
    protected $view = 'color';

    /**
     *
     * alpha 	  是否启用alpha选择
     * history    启用历史记录
     * predefine  启用预定义颜色
     * visible    是否默认显示color-select
     * @var array
     */
    protected $jsOptions = [
        'alpha' => false,
        'history' => ['#ffffff', '#000000'],
        'predefine' => ['#ffffff', '#000000', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        'visible' => false,
    ];

    /**
     * Undocumented function
     * rgb|rgba|hsl|hsla|hex
     * 
     * @deprecated 4.0
     * 
     * @param string $val
     * @return $this
     */
    public function format($val)
    {
        return $this;
    }

    /**
     * Undocumented function
     *
     * @deprecated 4.0
     * @return $this
     */
    public function rgb()
    {
        return $this;
    }

    /**
     * Undocumented function
     * 
     * @deprecated 4.0
     * @return $this
     */
    public function rgba()
    {
        $this->jsOptions['alpha'] = true;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @deprecated 4.0
     * @return $this
     */
    public function hsl()
    {
        return $this;
    }

    /**
     * Undocumented function
     *
     * @deprecated 4.0
     * @return $this
     */
    public function hsla()
    {
        return $this;
    }

    /**
     * Undocumented function
     *
     * @deprecated 4.0
     * @return $this
     */
    public function hex()
    {
        return $this;
    }

    /**
     * Undocumented function
     *
     * @deprecated 4.0
     * @param boolean $val
     * @return $this
     */
    public function inline($val = true)
    {
        return $this;
    }
}
