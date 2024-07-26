<?php

namespace tpext\builder\form;

use think\Model;
use tpext\think\View;
use tpext\builder\common\Module;
use tpext\builder\traits\HasDom;
use tpext\builder\common\Builder;
use tpext\builder\displayer\Fields;
use tpext\builder\inface\Renderable;
use tpext\builder\common\SizeAdapter;
use tpext\builder\form\FieldsContent;

class Step implements Renderable
{
    use HasDom;

    private $view = 'step';
    protected $size = [2, 8];

    protected $rows = [];

    protected $active = '';

    protected $id = '';

    protected $formId = '';

    protected $offset = 2;

    protected $mode = 'anchor';

    protected $readonly = false;

    /**
     * Undocumented variable
     *
     * @var array
     */
    protected $__fields__ = [];

    public function getId()
    {
        if (empty($this->id)) {
            $this->id = $this->formId . 'Step' . mt_rand(1000, 9999);
        }

        return $this->id;
    }

    /**
     * Undocumented function
     *
     * @param int $val
     * @return $this
     */
    public function offset($val)
    {
        $this->offset = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getFormId()
    {
        return $this->formId;
    }

    public function setFormId($val)
    {
        $this->formId = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $label
     * @param boolean $isActive
     * @param string $name
     * @return FieldsContent
     */
    public function addFieldsContent($label, $description = '', $isActive = false, $name = '')
    {
        if (empty($name)) {
            $name = (count($this->rows) + 1);
        }

        $name = 'step-' . $name;

        if (empty($this->active) && count($this->rows) == 0) {
            $this->active = $name;
        }

        if ($isActive) {
            $this->active = $name;
        }

        $content = new FieldsContent();
        $this->__fields__[] = $content;

        $this->rows[$name] = ['index' => count($this->rows), 'name' => $name, 'description' => $description, 'content' => $content, 'label' => $label];

        return $content;
    }

    /**
     * Undocumented function
     *
     * @param array|Model|\ArrayAccess $data
     * @return $this
     */
    public function fill($data = [])
    {
        foreach ($this->__fields__ as $content) {
            $content->fill($data);
        }
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function readonly($val = true)
    {
        foreach ($this->__fields__ as $content) {
            $content->readonly($val);
        }
        $this->readonly = $val;
        return $this;
    }

    public function isFieldsGroup()
    {
        return true;
    }

    /**
     * Undocumented function
     *
     * @param integer $left
     * @param integer $width
     * @return $this
     */
    public function size($left = 2, $width = 8)
    {
        $this->size = [$left, $width];
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function anchor()
    {
        $this->mode = 'anchor';
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function dots()
    {
        $this->mode = 'dots';
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    function class($val)
    {
        $this->class = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function addClass($val)
    {
        $this->class .= ' ' . $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function active($val)
    {
        $names = array_keys($this->rows);

        if (in_array($val, $names)) {
            $this->active = $val;
        }

        return $this;
    }

    protected function stepScript()
    {
        $stepId = $this->getId();
        $formId = $this->formId;

        $activeIndex = 0;
        foreach ($this->rows as $row) {
            if ($row['name'] == $this->active) {
                break;
            }
            $activeIndex += 1;
        }

        $fieldsGroup = [];
        $options = [];

        foreach ($this->rows as $row) {
            $fieldsGroup[$row['index']] = $this->collectFiledName($row['content'], []);
            $options[] = [
                'index' => $row['index'],
                'name' => $row['label'],
                'status' => $row['index'] == $activeIndex ? 'doing' : ($row['index'] < $activeIndex ? 'done' : ''),
                'description' => $row['description'],
                'count' => 0,
            ];
        }

        $line = $this->mode == 'dots' ? 'true' : 'false';

        $options = json_encode($options, JSON_UNESCAPED_UNICODE);
        $fieldsGroup = json_encode($fieldsGroup, JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$stepId}Op = ref({
        'size' : 'mini',
        'count-field' : 'count',
        'name-field' : 'name',
        'status-field' : 'status',
        'active' : {$activeIndex},
        'vertical' : true,
        'line' : {$line},
        'advanced' : !{$line},
        'space' : 200,
    });

    const {$stepId}Options = ref({$options});
    const {$stepId}FieldsGroup = {$fieldsGroup};

    const {$stepId}PrevClick = () => {
        if({$stepId}Op.value.active > 0) {
            {$stepId}Op.value.active -= 1;
            {$stepId}Actice();
        }
    };

    const {$stepId}NextClick = async () => {
        if({$stepId}Op.value.active < {$stepId}Options.value.length - 1) {
            const errArray = [];
            await {$formId}Ref.value.validateField({$stepId}FieldsGroup[{$stepId}Op.value.active], (errMsg, fieldConfig) => {
                if (errMsg) {
                    errArray.push(fieldConfig)
                }
            });
            if (errArray.length > 0) {
                TinyModal.message({ message: __blang.bilder_validate_form_failed, status: 'warning', messageClosable: true });
                return false;
            }
            {$stepId}Op.value.active += 1;
            {$stepId}Actice();
        }
    };

    const {$stepId}FinishClick = () => {
        {$formId}Submit();
    };

    const {$stepId}Click = (index, node) => {
        {$stepId}Op.value.active = index;
        {$stepId}Actice();
    }

    const {$stepId}Actice = () => {
        {$stepId}Options.value = {$stepId}Options.value.map((item, index) => {
            item.status = index == {$stepId}Op.value.active ? 'doing' : (index < {$stepId}Op.value.active ? 'done' : '');
            return item;
        });
    };

EOT;
        Builder::getInstance()->addSetupScript($script);

        Builder::getInstance()->addVueToken([
            "{$stepId}Op",
            "{$stepId}Options",
            "{$stepId}PrevClick",
            "{$stepId}NextClick",
            "{$stepId}FinishClick",
            "{$stepId}Click",
        ]);
    }

    /**
     * Undocumented function
     * 
     * @param mixed $field
     * @return $this
     */
    protected function collectFiledName($field, $fieldNames)
    {
        if ($field instanceof FieldsContent) {
            $rows = $field->getRows();
            foreach ($rows as $row) {
                $fieldNames = $this->collectFiledName($row->getDisplayer(), $fieldNames);
            }
        } else if ($field instanceof Fields) {
            $rows = $field->getContent()->getRows();
            foreach ($rows as $row) {
                $fieldNames = $this->collectFiledName($row->getDisplayer(), $fieldNames);
            }
        } else {
            $fieldNames[] = $field->getName();
        }
        return $fieldNames;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getClass()
    {
        return empty($this->class) ? '' : ' ' . $this->class;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getRows()
    {
        return $this->rows;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function beforRender()
    {
        foreach ($this->rows as $row) {
            $row['content']->beforRender();
        }

        $this->stepScript();

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return mixed
     */
    public function render($partial = false)
    {
        $template = Module::getInstance()->getViewsPath() . 'form' . DIRECTORY_SEPARATOR . $this->view . '.html';

        $vars = [
            'rows' => $this->rows,
            'id' => $this->getId(),
            'class' => $this->class,
            'size' => $this->size,
            'sizeAttr' => $this->getSizeAttr(),
            'attr' => $this->getAttrWithStyle(),
            'readonly' => $this->readonly,
        ];

        $viewshow = new View($template);

        if ($partial) {
            return $viewshow->assign($vars);
        }

        return $viewshow->assign($vars)->getContent();
    }

    public function getSizeAttr()
    {
        $size = SizeAdapter::make()->adjustDisplayerSize($this->size);
        return [SizeAdapter::make()->getColSizeAttrFromColClass($size[0]), SizeAdapter::make()->getColSizeAttrFromColClass($size[1])];
    }

    public function destroy()
    {
        $this->rows = null;
    }
}
