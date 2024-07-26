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
     * Undocumented function
     *
     * @param string|array $val
     * @return $this
     */
    public function disabledOptions($val)
    {
        $this->disabledOptions = $val;
        return $this;
    }

    protected function fieldScript()
    {
        $fieldId = $this->getId();

        $options = [];

        foreach ($this->options as $key => $label) {
            $options[] = [
                'key' => (string)$key,
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
    }
}
