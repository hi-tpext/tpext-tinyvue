<?php

namespace tpext\builder\displayer;

class MultipleSelect extends Select
{
    protected $valueType = 'array';

    /**
     * Undocumented variable
     *
     * @var array|string
     */
    protected $default = [];

    protected $postAsString = false;

    /**
     * Undocumented variable
     *
     * @var array|string
     */
    protected $checked = [];

    public function created($type = '')
    {
        parent::created($type);

        $multipleOptios = [
            'multiple' => true,
            'max-visible-rows' => 1,
            'multiple-limit' => 999,
            'collapse-tags' => false,
            'hover-expand' => true,
            'show-alloption' => true,
            'all-text' => __blang('bilder_left_tree_text_all')
        ];

        $this->jsOptions($multipleOptios);
    }

    /**
     * Undocumented function
     *
     * @param int $val
     * @return $this
     */
    public function limit($val)
    {
        $this->jsOptions['multiple-limit'] = $val;
        $this->jsOptions['show-limit-text'] = $val > 0;
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
     * @param array|string $val
     * @return $this
     */
    public function default($val = [])
    {
        $this->default = $val;
        return $this;
    }

    protected function fieldScript()
    {
        parent::fieldScript();
        
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
