<?php

namespace tpext\builder\displayer;

use tpext\builder\traits\HasOptions;
use tpext\builder\traits\HasWhen;

class Transfer extends Field
{
    use HasOptions;
    use HasWhen;

    protected $view = 'transfer';

    protected $valueType = 'array';

    protected $default = [];

    protected $checked = [];

    protected $disabledOptions = [];

    protected $postAsString = false;

    protected $jsOptions = [
        'button-texts' => [],
        'titles' => ['待选择', '已选择'],
        'format' => [
            'noChecked' => '未勾选 / 共${total}',
            'hasChecked' => '已选择${checked} / 共${total}'
        ],
        'filterable' => true,
        'props' => [
            'key' => 'key',
            'label' => 'text',
            'disabled' => 'disabled'
        ],
        'show-all-btn' => false,
        'target-order' => 'original', //"original" / "push" / "unshift"
    ];

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
     * @param string|array $val
     * @return $this
     */
    public function disabledOptions($val)
    {
        $this->disabledOptions = is_array($val) ? $val : explode(',', $val);
        return $this;
    }

    protected function fieldScript()
    {
        $fieldId = $this->getId();

        $options = [];

        foreach ($this->options as $key => $label) {
            $options[] = [
                'key' => (string) $key,
                'text' => $label,
                'disabled' => in_array($key, $this->disabledOptions),
            ];
        }

        $options = json_encode($options, JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$fieldId}Options = ref({$options});

EOT;
        $this->setupScript[] = $script;
        $this->addVueToken([
            "{$fieldId}Options",
        ]);

        $this->whenScript();

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
