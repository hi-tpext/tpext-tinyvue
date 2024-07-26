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
}
