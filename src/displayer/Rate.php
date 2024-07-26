<?php

namespace tpext\builder\displayer;

class Rate extends Text
{
    protected $view = 'rate';

    protected $valueType = 'float';
    protected $size = [2, 6];

    protected $jsOptions = [
        'allow-half' => true,
        'size' => '23px',
        'space' => '36px',
        'colors' => ['#FADB14', '#FADB14', '#FADB14'],
        'high-threshold' => 4,
        'low-threshold' => 2,
        'max' => 5,
        'score-template' => '{value}分',
        'show-score' => false,
        'show-text' => true,
        'texts' => ['很差', '差', '一般', '好', '很好'],
    ];
}
