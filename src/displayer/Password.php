<?php

namespace tpext\builder\displayer;

class Password extends Text
{
    /**
     *
     * maxlength 　最大输入长度
     * @var array
     */
    protected $jsOptions = [
        'maxlength' => '',
        'show-password' => true,
        'autocomplete' => 'new-password',
    ];

    protected $view = 'password';
}
