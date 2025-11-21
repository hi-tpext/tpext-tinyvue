<?php

namespace tpext\builder\displayer;

use tpext\builder\common\Builder;

class Button extends Field
{
    protected $view = 'button';

    protected $input = false;

    /**
     * circle	boolean	false	是否圆形按钮
     * ghost	boolean	false	是否幽灵按钮
     * loading	boolean	false	是否加载中状态
     * native-type	'button' | 'submit' | 'reset'	'button'	对应按钮原生 type 属性
     * plain	boolean	false	是否朴素按钮
     * reset-time	number	1000	设置按钮禁用时间，防止重复提交，单位毫秒
     * round	boolean	false	是否圆角按钮
     * size	'large' | 'medium' | 'small' | 'mini'	--	定义按钮尺寸
     * type	'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'	--	展示按钮不同的状态，设置为text则展示为文本按钮
     *
     * @var array
     */
    protected $jsOptions = [
        'size' => '',
        'type' => 'default',
        'native-type' => 'button',
        'loading' => false,
        'circle' => false,
        'reset-time' => 500,
        'round' => false,
        'plain' => true,
        'ghost' => false,
    ];

    protected $onClick = '';

    protected $size = [0, 12];

    protected $showLabel = false;

    public function created($type = '')
    {
        parent::created($type);
        $this->name = '__button' . mt_rand(100, 999);
    }

    /**
     * Undocumented function
     *
     * @param string $val primary|success|warning|danger|info|text
     * @return $this
     */
    public function type($val)
    {
        $this->jsOptions['type'] = str_replace('btn-', '', $val);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function nativeType($val)
    {
        $this->jsOptions['native-type'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function buttonSize($val)
    {
        $this->jsOptions['size'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function loading($val = true)
    {
        $this->jsOptions['loading'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function closeLayer()
    {
        $script = <<<EOT
        layerCloseWindow();
EOT;
        $this->onClick = $script;
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

    protected function fieldScript()
    {
        $btnId = $this->getId();

        $script = <<<EOT

    const {$btnId}Click = () => {
        //自行处理按钮事件
        {$this->onClick}
    };

EOT;
        $this->setupScript[] = $script;
        Builder::getInstance()->addVueToken(["{$btnId}Click"]);
    }
}
