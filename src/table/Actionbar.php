<?php

namespace tpext\builder\table;

use tpext\builder\common\Toolbar;
use tpext\builder\toolbar\ActionBtn;
use tpext\builder\toolbar\Html;
use tpext\builder\common\Builder;

class Actionbar extends Toolbar
{
    protected $pk;

    protected $rowId;

    protected $rowData;

    protected $mapClass = [];

    protected $tableId = '';

    protected $actionWidth = 'auto';

    protected $actionConfig = [];

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function tableId($val)
    {
        $this->tableId = $val;
        $this->extKey('action' . $val);

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @param array|string $size
     * @return $this
     */
    public function useLayerAll($val, $size = [])
    {
        foreach ($this->elms as $elm) {
            $elm->useLayer($val, $size);
        }

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $barType
     * @return $this
     */
    public function created($barType = '')
    {
        parent::created();
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function pk($val)
    {
        $this->pk = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array $data
     * @return $this
     */
    public function rowData($data)
    {
        if (isset($data[$this->pk])) {
            $this->rowId = $data[$this->pk];
        }

        $this->rowData = $data;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array $data
     * @return $this
     */
    public function mapClass($data)
    {
        $this->mapClass = $data;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getActionConfig()
    {
        if (empty($this->elms)) {
            $this->buttons();
        }

        $width = 0;
        $btnGropps = [];

        foreach ($this->elms as $elm) {

            if ($this->extKey) {
                $elm->extKey($this->extKey);
            }

            $elm->tableId($this->tableId);

            $label = $elm->getLabel();
            $icon = $elm->getInon();
            $labelWidth = mb_strlen($label) * 20;

            if ($icon && $label) {
                $labelWidth += 18;
                $width += $labelWidth > 30 ? $labelWidth : 30;
            } else if ($label) {
                $width += $labelWidth > 30 ? $labelWidth : 30;
            } else {
                $width += 30;
            }

            $width += 11;

            if ($elm instanceof Html && stristr($label, '<br')) {
                $btnGropps[] = $width;
                $width = 0;
            }

            if (!($elm instanceof ActionBtn)) {
                continue;
            }

            if ($this->rowId) {
                $elm->dataId($this->rowId);
            }

            if ($this->rowData) {
                $elm->data($this->rowData);
                $elm->parseUrl();
            }

            $matchClass = [];

            if ($this->mapClass) {
                $elm->mapClass($this->mapClass);
                $matchClass = $elm->parseMapClass();
            }

            $elm->initLayer();

            $config = [
                'href' => $elm->getHref(),
                'label' => $elm->parseLabel(),
                'hidden' => in_array('hidden', $matchClass),
                'disabled' => in_array('disabled', $matchClass) || in_array('disable', $matchClass),
                'dbl_click' => $elm->hasClass('dbl-click'),
                'layer_size' => $elm->getLayerSize(),
                'layer_title' => $elm->parseLabel() ?: ($elm->getAttrByName('data-title') ?: $elm->getAttrByName('title')),
            ];

            if (!$config['href']) {
                unset($config['href']);
            }
            if (!$config['label']) {
                unset($config['label']);
            }
            if (!$config['hidden']) {
                unset($config['hidden']);
            }
            if (!$config['disabled']) {
                unset($config['disabled']);
            }
            if (!$config['dbl_click']) {
                unset($config['dbl_click']);
            }
            if (!$config['layer_size']) {
                unset($config['layer_size']);
            }

            $this->actionConfig[$elm->getId()] = $config;
        }

        if (count($btnGropps)) {
            $width = max($btnGropps);
        }

        $this->actionWidth = $width;

        return $this->actionConfig;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function buttons()
    {
        $this->btnEdit();
        $this->btnDelete();

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $url
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @return $this
     */
    public function btnEdit($url = '', $label = '', $type = 'primary', $icon = 'mdi-lead-pencil', $attr = 'title="编辑"')
    {
        if (empty($url)) {
            $url = (string) url('edit', ['id' => '__data.pk__']);
        }
        if ($attr == 'title="编辑"') {
            $attr = 'title="' . __blang('bilder_action_edit') . '"';
        }
        $this->actionBtn('edit', $label)->href($url)->icon($icon)->type($type)->addAttr($attr);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $url
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @return $this
     */
    public function btnView($url = '', $label = '', $type = 'success', $icon = 'mdi-eye-outline', $attr = 'title="查看"')
    {
        if (empty($url)) {
            $url = (string) url('view', ['id' => '__data.pk__']);
        }
        if ($attr == 'title="查看"') {
            $attr = 'title="' . __blang('bilder_action_view') . '"';
        }
        $this->actionBtn('view', $label)->href($url)->icon($icon)->type($type)->addAttr($attr);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $postUrl
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @param boolean|string $confirm
     * @return $this
     */
    public function btnDelete($postUrl = '', $label = '', $type = 'danger', $icon = 'mdi-delete', $attr = 'title="删除"', $confirm = true)
    {
        if (empty($postUrl)) {
            $postUrl = (string) url('delete');
        }
        if ($attr == 'title="删除"') {
            $attr = 'title="' . __blang('bilder_action_delete') . '"';
        }
        $this->actionBtn('delete', $label)->postRowid($postUrl, $confirm)->icon($icon)->type($type)->addAttr($attr);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $postUrl
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @param boolean|string $confirm
     * @return $this
     */
    public function btnDisable($postUrl = '', $label = '', $type = 'warning', $icon = 'mdi-block-helper', $attr = 'title="禁用"', $confirm = true)
    {
        if (empty($postUrl)) {
            $postUrl = (string) url('enable', ['state' => 0]);
        }
        if ($attr == 'title="禁用"') {
            $attr = 'title="' . __blang('bilder_action_disable') . '"';
        }
        $this->actionBtn('disable', $label)->postRowid($postUrl, $confirm)->icon($icon)->type($type)->addAttr($attr);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $postUrl
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @param boolean|string $confirm
     * @return $this
     */
    public function btnEnable($postUrl = '', $label = '', $type = 'success', $icon = 'mdi-check', $attr = 'title="启用"', $confirm = true)
    {
        if (empty($postUrl)) {
            $postUrl = (string) url('enable', ['state' => 1]);
        }
        if ($attr == 'title="启用"') {
            $attr = 'title="' . __blang('bilder_action_enable') . '"';
        }
        $this->actionBtn('enable', $label)->postRowid($postUrl, $confirm)->icon($icon)->type($type)->addAttr($attr);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $enableTitle
     * @param string $disableTitle
     * @return $this
     */
    public function btnEnableAndDisable($enableTitle = '启用', $disableTitle = '禁用')
    {
        if ($enableTitle == '启用') {
            $enableTitle = __blang('bilder_action_enable');
        }
        if ($disableTitle == '禁用') {
            $disableTitle = __blang('bilder_action_disable');
        }
        $this->btnEnable()->getCurrent()->attr('title="' . $enableTitle . '"');
        $this->btnDisable()->getCurrent()->attr('title="' . $disableTitle . '"');

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $name
     * @param string $url
     * @param string $label
     * @param string $type
     * @param string $icon
     * @param string $attr
     * @return $this
     */
    public function btnLink($name = '', $url = '', $label = '', $type = '', $icon = '', $attr = '')
    {
        if (!$name) {
            $name = preg_replace('/.+?\/(\w+)(\.\w+)?$/', '$1', $url, -1, $count);

            if (!$count) {
                $name = preg_replace('/\W/', '_', $url);
            }
        }

        $this->actionBtn($name, $label)->href($url)->icon($icon)->type($type)->addAttr($attr);

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $name
     * @param string $postUrl
     * @param string $label
     * @param string $type 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
     * @param string $icon
     * @param string $attr
     * @param boolean|string $confirm
     * @return $this
     *
     */
    public function btnPostRowid($name = '', $postUrl = '', $label = '', $type = '', $icon = 'mdi-checkbox-marked-outline', $attr = '', $confirm = true)
    {
        if (!$name) {
            $name = preg_replace('/.+?\/(\w+)(\.\w+)?$/', '$1', $postUrl, -1, $count);

            if (!$count) {
                $name = preg_replace('/\W/', '_', $postUrl);
            }
        }

        if (preg_match('/__data\.([\w\.]+)__/i', $postUrl, $mch)) {
            Builder::getInstance()->notify(__blang('bilder_url_format_invalid') . '[' . $mch[0] . ']', 'warning');
        }

        $this->actionBtn($name, $label)->postRowid($postUrl, $confirm)->icon($icon)->type($type)->addAttr($attr);

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return int|string
     */
    public function getActionWidth()
    {
        return $this->actionWidth;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function html($val)
    {
        parent::html($val);
        return $this;
    }

    /**
     * Undocumented function
     * 换行
     * @return $this
     */
    public function br()
    {
        parent::html('<br />');
        return $this;
    }
}
