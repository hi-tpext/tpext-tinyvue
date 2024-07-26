<?php

namespace tpext\builder\common;

use think\Collection;
use think\helper\Arr;
use tpext\think\View;
use tpext\common\ExtLoader;
use tpext\builder\table\TEmpty;
use tpext\builder\table\TColumn;
use tpext\builder\traits\HasDom;
use tpext\builder\table\TWrapper;
use tpext\builder\displayer\Field;
use tpext\builder\table\Actionbar;
use tpext\builder\displayer\Fields;
use tpext\builder\inface\Renderable;
use tpext\builder\table\FieldsContent;
use tpext\builder\table\MultipleToolbar;
use tpext\builder\displayer\MultipleFile;

/**
 * Table class
 */
class Table extends TWrapper implements Renderable
{
    use HasDom;

    protected $js = [];
    protected $css = [];
    protected $id = 'theTable';
    protected $headTextAlign = 'center';
    protected $textAlign = 'center';
    protected $tableColumns = [];
    protected $dataList = [];
    /**
     * Undocumented variable
     * @var Field[]
     */
    protected $list = [];
    /**
     * Undocumented variable
     * @var TColumn[] 
     */
    protected $cols = [];
    protected $data = [];
    protected $pk = 'id';
    protected $actionbars = [];
    protected $checked = [];
    protected $useCheckbox = true;
    protected $pageSize = 0;
    protected $dataTotal = 0;
    protected $emptyText = '';
    protected $autoPost = [];
    /**
     * Undocumented variable
     *
     * @var FieldsContent
     */
    protected $__fields__ = null;
    /**
     * Undocumented variable
     *
     * @var MultipleToolbar
     */
    protected $toolbar = null;
    protected $useToolbar = true;
    protected $lockForExporting = false;
    /**
     * Undocumented variable
     *
     * @var Actionbar
     */
    protected $actionbar = null;
    protected $useActionbar = true;
    protected $actionRowText = '';
    protected $isInitData = false;
    protected $sortable = ['id'];
    protected $sortOrder = '';
    protected $partial = false;
    /**
     * Undocumented variable
     *
     * @var Row
     */
    protected $addTop;
    /**
     * Undocumented variable
     *
     * @var Row
     */
    protected $addBottom;
    /**
     * Undocumented variable
     *
     * @var Search
     */
    protected $searchForm = null;
    /**
     * Undocumented variable
     *
     * @var array
     */
    protected $pagesizeDropdown = [];
    protected $usePagesizeDropdown = true;
    /**
     * Undocumented variable
     *
     * @var TEmpty
     */
    protected $tEmpty = null;
    /**
     * Undocumented function
     *
     * @return $this
     */
    public function created()
    {
        $this->emptyText = Module::config('table_empty_text');
        $this->actionRowText = __blang('bilder_action_operation');

        $this->tEmpty = new TEmpty;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $name
     * @param \tpext\builder\table\TColumn $col
     * @return $this
     */
    public function addCol($name, $col)
    {
        $this->cols[$name] = $col;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getCols()
    {
        return $this->cols;
    }

    /**
     * Undocumented function
     * 主键, 默认 为 'id'
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
     * @param string $val
     * @return $this
     */
    public function tableId($val)
    {
        $this->id = preg_replace('/\W/', '_', $val);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getTableId()
    {
        return $this->id;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function partial($val = true)
    {
        $this->partial = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getJs()
    {
        return $this->js;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getCss()
    {
        return $this->css;
    }

    /**
     * Undocumented function
     * 
     * @param string $val left | center | right
     * @return $this
     */
    public function textAlign($val)
    {
        $this->textAlign = $val;
        return $this;
    }

    /**
     * Undocumented function
     * 
     * @param string $val left | center | right
     * @return $this
     */
    public function headTextAlign($val)
    {
        $this->headTextAlign = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string|array $val
     * @return $this
     */
    public function sortable($val)
    {
        if (!is_array($val)) {
            $val = explode(',', $val);
        }

        $this->sortable = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array|string $val
     * @return $this
     */
    public function checked($val)
    {
        $this->checked = is_array($val) ? $val : explode(',', $val);
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function emptyText($val)
    {
        $this->emptyText = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array|Collection|\IteratorAggregate $data
     * @return $this
     */
    public function data($data = [])
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param bool $val
     * @return $this
     */
    public function lockForExporting($val = true)
    {
        $this->lockForExporting = $val;

        if ($this->toolbar) {
            $this->toolbar->lockForExporting($val);
        }
        if ($this->actionbar) {
            $this->actionbar->lockForExporting($val);
        }

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array|Collection|\IteratorAggregate $data
     * @return $this
     */
    public function fill($data = [])
    {
        if (empty($data)) {
            return $this;
        }

        $this->data = $data;
        if (count($data) > 0 && empty($this->cols)) {
            $cols = [];
            $first = $data[0];
            if (is_object($first) && method_exists($first, 'toArray')) {
                $first = $first->toArray();
            }
            $cols = array_keys($first);
            foreach ($cols as $col) {
                $this->show($col, ucfirst($col));
            }
        }
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function sortOrder($val)
    {
        $this->sortOrder = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array|Collection|\IteratorAggregate
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getChooseColumns()
    {
        return $this->getToolbar()->getChooseColumns();
    }

    /**
     * Undocumented function
     *
     * @param int $dataTotal
     * @param int $pageSize
     * @return $this
     */
    public function paginator($dataTotal, $pageSize = 10)
    {
        if (!$pageSize) {
            $pageSize = 10;
        }

        $this->dataTotal = $dataTotal;
        $this->pageSize = $pageSize;

        return $this;
    }

    /**
     * 获取一个toolbar
     *
     * @return MultipleToolbar
     */
    public function getToolbar()
    {
        if (empty($this->toolbar)) {
            $this->toolbar = Widget::makeWidget('MultipleToolbar');
            $this->toolbar->tableId($this->id);
        }

        return $this->toolbar;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function useToolbar($val)
    {
        $this->useToolbar = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function useActionbar($val)
    {
        $this->useActionbar = $val;
        return $this;
    }

    /**
     * Undocumented function
     * @param boolean $val
     * @return $this
     */
    public function useCheckbox($val)
    {
        $this->useCheckbox = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean $val
     * @return $this
     */
    public function useExport($val = true)
    {
        $this->getToolbar()->useExport($val);

        return $this;
    }

    /**
     * Undocumented function
     *
     * @param boolean|array|string $val 默认显示的字段，false则禁用
     * @return $this
     */
    public function useChooseColumns($val = true)
    {
        $this->getToolbar()->useChooseColumns($val);

        return $this;
    }

    /**
     * 弃用，使用｀useExport｀代替
     * @deprecated 1.8.93
     * @param boolean $val
     * @return $this
     */
    public function hasExport($val = true)
    {
        $this->getToolbar()->useExport($val);

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return bool
     */
    public function isLockForExporting()
    {
        return $this->lockForExporting;
    }

    /**
     * 获取一个actionbar
     *
     * @return Actionbar
     */
    public function getActionbar()
    {
        if (empty($this->actionbar)) {
            $this->actionbar = Widget::makeWidget('Actionbar');
            $this->actionbar->tableId($this->id);
        }

        return $this->actionbar;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    protected function actionRowText($val)
    {
        $this->actionRowText = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param array|boolean $items
     * @return $this
     */
    public function pagesizeDropdown($items)
    {
        if ($items === false) {
            $this->usePagesizeDropdown = false;
            return $this;
        }

        $this->pagesizeDropdown = $items;

        return $this;
    }

    /**
     * 获取一个搜索
     *
     * @return Search
     */
    public function getSearch()
    {
        if (empty($this->searchForm)) {
            $this->searchForm = Widget::makeWidget('Search');
            $this->searchForm->setTableId($this->id);
        }
        return $this->searchForm;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function beforRender()
    {
        ExtLoader::trigger('tpext_table_befor_render', $this);

        $this->initData();

        if ($this->partial) {
            //ajax return json data
        } else {
            //get render table html 
            Builder::getInstance()->addJs($this->js);
            Builder::getInstance()->addCss($this->css);

            $emptyForm = empty($this->searchForm);

            if ($emptyForm) {
                $this->getSearch();
            }

            $this->tableScript();

            if ($this->useToolbar) {
                $toolbar = $this->getToolbar();
                $toolbar->useSearch(!$emptyForm && !$this->searchForm->empty());
                $toolbar->setTableCols($this->cols);
                $toolbar->beforRender();
            }

            if ($this->useActionbar && $this->actionbar) {
                $this->actionbar->beforRender();
            }

            if ($emptyForm) {
                $this->searchForm->addClass('form-empty');
            }

            $this->searchForm->beforRender();

            if ($this->addTop) {
                $this->addTop->beforRender();
            }

            if ($this->addBottom) {
                $this->addBottom->beforRender();
            }
        }

        return $this;
    }

    protected function tableScript()
    {
        if ($this->usePagesizeDropdown && $this->pageSize && empty($this->pagesizeDropdown)) {
            $items = [
                $this->pageSize, 6, 10, 14, 20, 30, 40, 50, 60, 90, 120, 200, 350, 500, 800, 1000,
            ];
            $this->pagesizeDropdown = $items;
        }

        $table = $this->id;
        $search = $this->searchForm->getFormId();
        $this->pagesizeDropdown = array_unique(array_values($this->pagesizeDropdown));
        sort($this->pagesizeDropdown);
        $tableColumns = json_encode($this->tableColumns, JSON_UNESCAPED_UNICODE);
        $pagesizeDropdown = json_encode($this->pagesizeDropdown, JSON_UNESCAPED_UNICODE);
        $initData = json_encode($this->dataList, JSON_UNESCAPED_UNICODE);
        $layout = $this->dataTotal > $this->pageSize ? 'total, prev, pager, next, jumper, sizes' : 'total';
        $useChooseColumns = $this->getToolbar()->getChooseColumns() === false ? '[]'
            : json_encode($this->getToolbar()->getChooseColumns(), JSON_UNESCAPED_UNICODE);

        $script = <<<EOT

    const {$table}Ref = ref(null);
    const {$table}Loading = ref(true);
    const {$table}SelectedSize = ref(0);
    const {$table}MultipleToolbarDisabled = ref(true);
    const {$table}UseChooseColumns = ref({$useChooseColumns});
    const {$table}ToolbarSetting = {$useChooseColumns}.length ? ref({simple: true}) : false;
    const {$table}Columns = ref({$tableColumns});
    const {$table}ActiveRow = ref({__pk__ : null});
    const {$table}ActiveRowChanged = {};
    const {$table}ToolbarId = ref('{$table}toolbar-' + (window.location.origin + window.location.pathname).replace(/\W/g, '_'));

    let {$table}ActiveRowTurn = false;
    let {$table}InitData = {$initData};
    let {$table}InitDataTotal = {$this->dataTotal};
    let {$table}Init = false;

    const {$table}PagerConfig = ref({
        attrs: {
            currentPage: 1,
            pageSize: {$this->pageSize},
            pageSizes: {$pagesizeDropdown},
            total: {$this->dataTotal},
            align: 'center',
            layout: '{$layout}'
        }
    });

    let {$table}Sort = '';

    const {$table}Refresh = (resetPage) => {
        if(resetPage) {
            {$table}PagerConfig.value.attrs.currentPage = 1;
        }
        {$table}Ref.value.handleFetch();
    };

    const {$table}GetData = ({ page, sortBy}) => {
        if(!{$table}Init && {$table}InitData.length) {
            {$table}Init = true;
            {$table}Loading.value = false;
            return new Promise((resolve) => {
                resolve({ result : {$table}InitData, page: { total : {$table}InitDataTotal } });
            });
        }
        {$table}Loading.value = true;
        if (sortBy && sortBy.field && sortBy.order) {
            {$table}Sort = sortBy.field + ' ' + sortBy.order;
        }
        else {
            {$table}Sort = '';
        }

        let params = Object.assign(
            {   __fetch_data__ : 'y',
                __page__ : page.currentPage,
                __pagesize__ : page.pageSize,
            },
            {$search}Data,
            {$table}Sort ? { __sort__ : {$table}Sort } : null,
        );

        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: location.href,
                responseType: 'json',
                params: params,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                timeout: 10000,
            }).then(res => {
                {$table}MultipleToolbarDisabled.value = true;//重置多选工具栏状态
                let data = res.data || {};
                setTimeout(() => {
                    {$table}Loading.value = false;
                }, 500);
                {$table}ActiveRow.value = {__pk__ : null};
                resolve({ result : data.list, page: { total : data.total } });
            }).catch(e => {
                {$table}Loading.value = false;
                console.log(e);
                TinyModal.message({ message: __blang.bilder_network_error + (e.message || JSON.stringify(e)), status: 'error', messageClosable: true });
            });
        });
    };

    const {$table}ExportData = (url, type) => {
        const loading = TinyLoading.service({
            text: __blang.bilder_generating_data,
            background: 'rgba(0, 0, 0, 0.3)'
        });

        let {$table}Selected = {$table}Ref.value.getSelectRecords();
        let ids = {$table}Selected.map(x => { return x.__pk__  }).join(',');
        let params = Object.assign(
            {   __file_type__ : type,
                __ids__ : ids,
                __columns__ : {$table}UseChooseColumns.value.join(','),
            },
            {$table}Sort ? { __sort__ : {$table}Sort } : null,
        );

        axios({
            method: 'get',
            url: url,
            responseType: 'json',
            params: params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 10000,
        }).then(res => {
            loading.close();
            let data = res.data || {};
            if(data.code) {
                if(data.open_url) {
                    //数据太多，打开页面，分页处理
                    layer.open({
                        type: 2,
                        title: "{:__blang('bilder_generating_data')}",
                        scrollbar: false,
                        area: ['400px','150px'],
                        content: data.open_url
                    });
                } else {
                    //一次性生成文件，并返回下载链接
                    var filename = data.data.replace(/.+?([^\/]+)$/, '$1');
                    layer.open({
                        type: 1,
                        title: __blang.bilder_download_file,
                        shadeClose: false,
                        area: ['400px','150px'],
                        content: '<div class="alert alert-success " role="alert" style="widht:94%;margin:2%;"><p>' + __blang.bilder_file_has_been_generated + '</p><a onclick="layer.closeAll();" target="_blank" href="' + data.data + '">' + filename + '</a></div>',
                    });
                }
            } else {
                TinyModal.alert(__blang.bilder_operation_failed + data.msg);
            }
        }).catch(e => {
            loading.close();
            console.log(e);
            TinyModal.message({ message: __blang.bilder_network_error + (e.message || JSON.stringify(e)), status: 'error', messageClosable: true });
        });
    };
    
    const {$table}SendData = (url, params, refresh) => {
        params = Object.assign(
            {
                __token__ : window.__token__,
                _method : /.+?\/(?:destroy|delete|remove|del)(?:\.\w+)?$/.test(url) ? "delete" : "patch"
            },
            params,
        );

        {$table}Loading.value = true;
        axios({
            method: 'post',
            url: url,
            responseType: 'json',
            data: params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 60000,
        }).then(res => {
            {$table}Loading.value = false;
            let data = res.data || {};
            if (data.__token__) {
                window.__token__ = data.__token__;
            }
            if (data.status || data.code) {
                TinyNotify({
                    type: 'success',
                    message: data.msg || data.message || __blang.bilder_operation_succeeded,
                    position: 'top-right',
                    duration: 2000,
                });
                if (refresh) {
                    {$table}Refresh();
                }
            } else {
                TinyNotify({
                    type: 'error',
                    message: data.msg || data.message || __blang.bilder_operation_failed,
                    position: 'top-right',
                    duration: 2000,
                });
            }
            if (data.script || (data.data && data.data.script)) {
                let script = data.script || data.data.script;
                if ($('#script-div').length) {
                    $('#script-div').html(script);
                } else {
                    $('body').append(
                        '<div class="hidden" id="script-div">' + script + '</div>');
                }
            }
        }).catch(e => {
            {$table}Loading.value = false;
            console.log(e);
            TinyModal.message({ message: __blang.bilder_network_error + (e.message || JSON.stringify(e)), status: 'error', messageClosable: true });
        });
    };

    const {$table}SaveSetting = (configs) => {
        {$table}UseChooseColumns.value = configs.columns.filter(x => x.visible && x.property != '__action__').map(x => x.property);
        if ({$table}UseChooseColumns.value.length == 0) {
            TinyModal.message({ message: __blang.bilder_show_at_least_one_field, duration: '1500', status: 'warning', messageClosable: true });
        }
    };

    const {$table}CellClick = ({ row, rowIndex, column, columnIndex }) => {
        if (column.property == '__action__' || (column.params && column.params.isInput)) {
            return;
        }
        {$table}Ref.value.toggleRowSelection(row);
        {$table}SelectChange();
    };

    const {$table}CellDblclick = ({ row, rowIndex, column, columnIndex }) => {
        if (column.property == '__action__' || (column.params && column.params.isInput)) {
            return;
        }
        let dbl_click = null, edit_click = null, view_click = null, link_click = null;
        let btn = null;
        for(let k in row.__action__) {
            btn = row.__action__[k];
            if(btn.hidden || btn.disabled || !btn.href) {
                continue;
            }
            if(btn.dbl_click) {
                dbl_click = btn;
            }
            if(btn.name == 'edit') {
                edit_click = btn;
            }
            if(btn.name == 'view') {
                view_click = btn;
            }
            if(!link_click && btn.href) {
                link_click = btn;
            }
        }

        btn = null;
        if(dbl_click) {
            btn = dbl_click;
        } else if(edit_click) {
            btn = edit_click;
        } else if(view_click) {
            btn = view_click;
        } else if(link_click) {
            btn = link_click;
        }

        if(btn) {
            layerOpenLink(btn.href, btn.layer_title, btn.layer_size);
        }
    };

    const {$table}SelectChange = () => {
        let data = {$table}Ref.value.getSelectRecords();
        {$table}SelectedSize.value = data.length;
        {$table}MultipleToolbarDisabled.value = data.length == 0;
    };

    const {$table}SelectAll = (args) => {
        {$table}SelectedSize.value = args.selection.length;
        {$table}MultipleToolbarDisabled.value = !args.checked;
    };

    const {$table}CellMouseenter = ({ row, rowIndex, column, columnIndex }) => {
        if(!{$table}ActiveRow.value || {$table}ActiveRow.value.__pk__ !== row.__pk__) {
            {$table}ActiveRowTurn = true;
            {$table}ActiveRow.value = row;
            setTimeout(() => {
                {$table}ActiveRowTurn = false;
            }, 20);
        }
    };

    const {$table}fetchData = ref({
        sort: true,
        api: {$table}GetData,
    });

    const {$table}Op = ref({
        'header-align' : '{$this->headTextAlign}',
        'border' : true,
        'auto-load' : true,
        'align' : '{$this->textAlign}',
        'row-id' : '__pk__',
        'show-header-overflow' : 'tooltip',
        'show-overflow' : 'tooltip',
        'size' : 'medium',
        'stripe' : true,
        'resizable' : true,
        'sortable' : true,
        'remote-sort' : true,
        'loading' : {$table}Loading,
        'column-min-width' : '100px',
        'fetch-data' : {$table}fetchData,
        'pager' : {$table}PagerConfig,
        'events' : {
            'cell-click' : {$table}CellClick,
            'cell-dblclick' : {$table}CellDblclick,
            'select-change' : {$table}SelectChange,
            'select-all' : {$table}SelectAll,
            'cell-mouseenter' : {$table}CellMouseenter,
        },
    });

EOT;

        Builder::getInstance()->addVueToken([
            "{$table}Ref",
            "{$table}Columns",
            "{$table}Op",
            "{$table}UseChooseColumns",
            "{$table}ToolbarSetting",
            "{$table}SaveSetting",
            "{$table}MultipleToolbarDisabled",
            "{$table}ToolbarId",
        ]);

        Builder::getInstance()->addSetupScript($script);

        if (count($this->autoPost)) {
            $scripts = [];
            foreach ($this->autoPost as $fieldName => $val) {
                $eventKey = $table . preg_replace('/\W/', '_', $fieldName) . 'Change';
                $url = $val['url'];
                $refresh = $val['refresh'] ? 'true' : 'false';
                $isText = in_array($val['displayerType'], ['Text', 'Textarea', 'Password']) ? 'true' : 'false';
                $delay = in_array($val['displayerType'], ['Number']) ?
                    1000 : (in_array($val['displayerType'], ['RangeSlider', 'Checkbox', 'MultipleSelect']) ? 700 : 300); //多选防抖时间长一点

                $scripts[] = <<<EOT

        let {$eventKey}Timer = null;
        watch(
            () => {$table}ActiveRow.value.{$fieldName},
            (newValue, oldValue) => {
                if(!{$table}ActiveRowTurn) {
                    let id = {$table}ActiveRow.value.__pk__;
                    if(!{$table}ActiveRow.value || !{$table}ActiveRow.value.__pk__) {
                        return;
                    }
                    let value = Array.isArray(newValue) ? newValue.join(',') : newValue;
                    {$table}ActiveRowChanged['{$fieldName}'] = value;
                    if($isText) {
                        return;
                    }
                    if({$eventKey}Timer) {
                        clearTimeout({$eventKey}Timer);
                        {$eventKey}Timer = null;
                    }
                    {$eventKey}Timer = setTimeout(() => {
                        let params = {
                            id: id,
                            name: '{$fieldName}',
                            value: value,
                        };
                        {$table}SendData('{$url}', params, $refresh);
                    }, {$delay});
                }
            }
        );

EOT;
            }

            Builder::getInstance()->addSetupScript(implode('', $scripts));
        }
    }

    protected function initData()
    {
        ExtLoader::trigger('tpext_table_init_data', $this);

        if (!$this->dataTotal) {
            $this->dataTotal = count($this->data);
        }
        if (!$this->pageSize) {
            $this->pageSize = $this->dataTotal;
        }
        if ($this->dataTotal <= 6) {
            $this->usePagesizeDropdown = false;
        }

        if (!$this->pk) {
            $this->pk = '__pk__';
        }

        $this->dataList = [];
        $actionbar = $this->getActionbar();
        $actionbar->pk($this->pk);
        $displayer = null;

        if ($this->partial) {
            $colAttr = [];
            foreach ($this->cols as $col => $colunm) {
                if (!($colunm instanceof TColumn)) {
                    continue;
                }
                $colAttr = $colunm->getColAttr();
                if ($colAttr['sortable']) {
                    $this->sortable[] = $col;
                }
            }
        } else {
            $colAttr = [];
            $this->tableColumns = [];
            $sortKey = '';
            if ($this->sortOrder) {
                $arr = explode(' ', $this->sortOrder);
                if (count($arr) == 2) {
                    $sortKey = $arr[0];
                }
            }

            $useChooseColumns = $this->getToolbar()->getChooseColumns();

            foreach ($this->cols as $col => $colunm) {
                if (!($colunm instanceof TColumn)) {
                    continue;
                }
                $colAttr = $colunm->getColAttr();

                if ($colAttr['sortable']) {
                    $this->sortable[] = $col;
                }

                $displayer = $colunm->getDisplayer();
                $title = $displayer->getLabel();

                $this->tableColumns[$col] = [
                    'align' => $colAttr['align'] ?: ($displayer->getStyleByName('text-align') ?: ($colunm->getStyleByName('text-align') ?: $this->textAlign)),
                    'header-align' => $colAttr['header-align'] ?: $this->headTextAlign,
                    'field' => $col,
                    'fixed' => $col == $this->pk ? 'left' : '',
                    'title' => strip_tags(str_replace(['<br>', '<br/>', '<br />', '<br >'], " | ", $title)), //需要过滤html标签
                    'class-name' => $colunm->getClass(),
                    'sortable' => $colAttr['sortable'] || $col == $sortKey || in_array($col, $this->sortable),
                    'width' => $colAttr['width'] ?: ($colunm->getStyleByName('width') ?: ($displayer->getStyleByName('width') ?: 'auto')),
                    'min-width' => $colAttr['min-width'] ?: ($colunm->getStyleByName('min-width') ?: ($displayer->getStyleByName('min-width') ?: '90')),
                    // 'max-width' => $colunm->getStyleByName('max-width') ?: ($displayer->getStyleByName('max-width') ?: '100%'),//暂不支持
                    'visible' => $colAttr['hidden'] ? false : ($useChooseColumns && ($useChooseColumns[0] == '*' || in_array($col, $useChooseColumns))),
                    'params' => $displayer->fieldInfo(),
                    //非标准参数
                    'title_raw' => $title, //用于header中显示html
                    'wrapperStyle' => $colunm->getStyle(),
                ];

                $this->list[$col] = $displayer;
            }
        }

        if (count($this->data)) {
            $fieldCols = null;
            $sDisplayer = null;
            foreach ($this->data as $key => $row) {
                if (!isset($row[$this->pk])) {
                    $row[$this->pk] = 'row_' . $key;
                }
                $this->dataList[$key] = [];
                $this->dataList[$key]['__pk__'] = $row[$this->pk];
                foreach ($this->cols as $col => $colunm) {
                    if (!($colunm instanceof TColumn)) {
                        continue;
                    }
                    $displayer = $colunm->getDisplayer();
                    $displayer->clearScript()
                        ->lockValue(false)
                        ->fill($row)
                        ->beforRender();
                    Arr::set($this->dataList[$key], $col, $displayer->renderValue());
                    $this->dataList[$key]['__field_info__'][$col] = $displayer->fieldInfo();

                    if ($displayer instanceof Fields) {
                        $fieldCols = $displayer->getContent()->getCols();
                        foreach ($fieldCols as $sCol) {
                            if (!($sCol instanceof TColumn)) {
                                continue;
                            }
                            $sDisplayer = $sCol->getDisplayer();
                            $sDisplayer->clearScript()
                                ->lockValue(false)
                                ->fill($row)
                                ->beforRender();
                            Arr::set($this->dataList[$key], $sDisplayer->getName(), $sDisplayer->renderValue());
                            $this->dataList[$key]['__field_info__'][$sDisplayer->getName()] = $sDisplayer->fieldInfo();
                        }
                    }
                }

                if ($this->useActionbar) {
                    $config = $actionbar->rowData($row)->getActionConfig();
                    foreach ($config as $k => $c) {
                        foreach ($c as $e => $v) {
                            $this->dataList[$key]['__action__'][$k][$e] = $v;
                        }
                    }
                }
            }
        } else {
            foreach ($this->cols as $col => $colunm) {
                if (!($colunm instanceof TColumn)) {
                    continue;
                }
                $colunm->getDisplayer()->value('')->beforRender();
            }
            if ($this->useActionbar) {
                $actionbar->rowData([])->getActionConfig();
            }
        }

        $this->isInitData = true;
    }

    /**
     * Undocumented function
     *
     * @return Row
     */
    public function addTop()
    {
        if (empty($this->addTop)) {
            $this->addTop = Row::make();
            $this->addTop->class('table-top');
        }

        return $this->addTop;
    }

    /**
     * Undocumented function
     *
     * @return Row
     */
    public function addBottom()
    {
        if (empty($this->addBottom)) {
            $this->addBottom = Row::make();
            $this->addBottom->class('table-bottom');
        }

        return $this->addBottom;
    }

    /**
     * Undocumented function
     * 
     * @param mixed $val
     * @return $this
     */
    public function addAutoPost($name, $val = [])
    {
        if (strstr($name, '[')) {
            $name = str_replace(['[', ']'], ['.', ''], $name);
        }
        $this->autoPost[$name] = $val;
        return $this;
    }

    /**
     * Undocumented function
     * @param string $name
     * 
     * @return FieldsContent
     */
    public function createFields()
    {
        $this->__fields__ = new FieldsContent();
        $this->__fields__->setTable($this);
        return $this->__fields__;
    }

    /**
     * Undocumented function
     *
     * @return $this
     */
    public function fieldsEnd()
    {
        $this->__fields__ = null;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getViewTemplate()
    {
        $template = Module::getInstance()->getViewsPath() . 'table.html';

        return $template;
    }

    /**
     * Undocumented function
     *
     * @return string|View|mixed
     */
    public function render()
    {
        if ($this->lockForExporting) {
            return 'lockForExporting';
        }

        if (!$this->isInitData) {
            $this->initData();
        }

        if ($this->partial) {
            ob_clean();
            return json(['list' => $this->dataList, 'total' => $this->dataTotal, 'pageSize' => $this->pageSize]);
        }

        $viewshow = new View($this->getViewTemplate());

        $vars = [
            'class' => $this->class,
            'attr' => $this->getAttrWithStyle(),
            'emptyText' => $this->emptyText,
            'useCheckbox' => $this->useCheckbox && $this->useToolbar,
            'name' => time() . mt_rand(1000, 9999),
            'id' => $this->id,
            'toolbar' => $this->useToolbar && !$this->partial ? $this->toolbar : null,
            'searchForm' => !$this->partial ? $this->searchForm : null,
            'actionRowText' => $this->actionRowText,
            'actionRowWidth' => $this->actionbar ? $this->actionbar->getActionWidth() : '',
            'useActionbar' => $this->useActionbar && $this->actionbar,
            'actionbar' => $this->actionbar,
            'addTop' => $this->addTop,
            'addBottom' => $this->addBottom,
            'list' => $this->list,
        ];
        return $viewshow->assign($vars)->getContent();
    }

    public function __toString()
    {
        $this->partial = false;
        return $this->render();
    }

    public function __call($name, $arguments)
    {
        if ($this->lockForExporting) {
            return $this->tEmpty;
        }

        $count = count($arguments);

        if ($count > 0 && static::isDisplayer($name)) {

            if (strstr($arguments[0], '[')) {
                $arguments[0] = str_replace(['[', ']'], ['.', ''], $arguments[0]);
            }

            $col = TColumn::make($arguments[0], $count > 1 ? $arguments[1] : '', $count > 2 ? $arguments[2] : 0);

            $col->setTable($this);

            if ($this->__fields__) {
                $this->__fields__->addCol($col);
            } else {
                $this->cols[$arguments[0]] = $col;
            }

            $displayer = $col->$name($arguments[0], $count > 1 ? $arguments[1] : '');
            $col->setLabel($displayer->getLabel());

            if ($displayer instanceof MultipleFile) { //表格中默禁止上传，使用btn控制，如确实需要上传，调用canUpload(true)
                $displayer->canUpload(false)->showInput(false)->disableButtons();
            }

            $displayer->showLabel(false);
            $displayer->inTable();
            $displayer->setFormMode('table');

            return $displayer;
        }

        throw new \InvalidArgumentException(__blang('bilder_invalid_argument_exception') . ' : ' . $name);
    }

    /**
     * 创建自身
     *
     * @param mixed $arguments
     * @return static
     */
    public static function make(...$arguments)
    {
        return Widget::makeWidget('Table', $arguments);
    }

    public function destroy()
    {
        $this->__fields__ = null;
        $this->toolbar = null;
        $this->actionbar = null;
        $this->pagesizeDropdown = null;
        foreach ($this->cols as $col) {
            $col->destroy();
        }
        $this->cols = null;
        $this->data = null;
        $this->tEmpty = null;
        if ($this->searchForm) {
            $this->searchForm->destroy();
            $this->searchForm = null;
        }
        if ($this->addTop) {
            $this->addTop->destroy();
            $this->addTop = null;
        }
        if ($this->addBottom) {
            $this->addBottom->destroy();
            $this->addBottom = null;
        }
    }
}
