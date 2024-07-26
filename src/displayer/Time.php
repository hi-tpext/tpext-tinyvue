<?php

namespace tpext\builder\displayer;

class Time extends Field
{
    protected $view = 'time';

    protected $size = [2, 2];

    protected $placeholder = '';

    /**
     *
     * clearable 是否显示清除按钮
     * @var array
     */
    protected $jsOptions = [
        'clearable' => true,
        'format' => 'HH:mm:ss',
        'value-format' => 'HH:mm:ss',
        'picker-options' => [
            'format' => 'HH:mm:ss',
            'selectableRange' => '00:00:00-23:59:59'
        ],
    ];

    /**
     * Undocumented function
     * HH:mm:ss
     * @param string $val
     * @return $this
     */
    public function format($val)
    {
        $this->jsOptions['format'] = $val;
        $this->jsOptions['value-format'] = $val;
        $this->jsOptions['picker-options']['format'] = $val;
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
            'placeholder' => $this->placeholder ?: __blang('bilder_please_select') . $this->label
        ];
    }
}
