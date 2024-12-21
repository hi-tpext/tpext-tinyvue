<?php

namespace tpext\builder\displayer;

class Icon extends Text
{
    protected $view = 'icon';

    protected $default = 'mdi mdi-access-point';

    protected $jsonUrl = '/assets/tpexttinyvue/fontjson/materialdesignicons.json';

    /**
     * Undocumented function
     *
     * @param string $url
     * @return $this
     */
    public function jsonUrl($url)
    {
        $this->jsonUrl = $url;
        return $this;
    }

    protected $jsOptions = [
        'dialogOp' => [
            'top' => '10%',
            'width' => '525px',
            'dialogClass' => 'icon-selector-dialog',
            'modal' => false,
        ],
        'gridOp' => [
            'show-header' => false,
            'height' => 225,
            'size' => 'mini',
            'border' => true,
            'optimization' => [
                'animat' => true,
            ],
            'auto-load' => false,
            'highlight-hover-row' => false,
        ],
        'visible' => false,
    ];

    protected function fieldScript()
    {
        $fieldId = $this->getId();
        $VModel = $this->getVModel();
        $url = $this->jsonUrl;
        $fieldName = $this->getName();

        $script = <<<EOT

    let {$fieldId}IconList = [];
    let {$fieldId}Data = [];
    let {$fieldId}Row = null;//如果是在items中，保持当前行的实例
    const {$fieldId}GridRef = ref(null);

    const {$fieldId}PagerConfig = ref({
        attrs: {
            currentPage: 1,
            pageSize: 112,
            pageSizes: [112, 192, 256, 320, 448, 576, 640, 768, 896, 1024, 2048],
            total: 0,
            align: 'center', // 可选值：['left', 'center', 'right']
            layout: 'pager, sizes',
            size: 'mini',
        }
    });

    const {$fieldId}Refresh = (resetPage) => {
        if(resetPage) {
            {$fieldId}PagerConfig.value.attrs.currentPage = 1;
        }
        {$fieldId}GridRef.value.handleFetch();
    };

    const {$fieldId}GetData = ({ page }) => {
        const { currentPage, pageSize } = page;
        const offset = (currentPage - 1) * pageSize;
        return Promise.resolve({
            result: {$fieldId}Split({$fieldId}Data.slice(offset, offset + pageSize)),
            page: { total: {$fieldId}Data.length }
        })
    };

    const {$fieldId}Split = (list) => {
        let rowsize = 16;
        let rows = Math.ceil(list.length / rowsize);
        let result = [];
        let row = [];
        for (let j = 0; j < list.length; j+=1) {
            row.push(list[j]);
            if (row.length === rowsize || j === list.length - 1) {
                result.push(row);
                row = [];
            }
        }
        return result;
    };

    const {$fieldId}FetchData = ref({
        api: {$fieldId}GetData
    });

    const {$fieldId}OpenIconSelector = (tRow) => {
        {$fieldId}Row = tRow;
        {$fieldId}Op.value.visible = !{$fieldId}Op.value.visible;
    };

    const {$fieldId}CellClick = ({row, columnIndex}) => {
        if({$fieldId}Row) {
            {$fieldId}Row.{$fieldName} = row[columnIndex];
        } else {
            {$VModel} = row[columnIndex];
        }
        {$fieldId}Op.value.visible = false;
    };

    const {$fieldId}Search = (key, value) => {
        if(!value.trim()) {
            {$fieldId}Data = {$fieldId}IconList;
        }
        else{
            {$fieldId}Data = {$fieldId}IconList.filter(d => d.indexOf(value.trim()) > -1);
        }
        {$fieldId}Refresh(true);
    };

    let {$fieldId}SearchChangeTimer = null;

    const {$fieldId}SearchInput = (value) => {
        if({$fieldId}SearchChangeTimer) {
            clearTimeout({$fieldId}SearchChangeTimer);
        }
        {$fieldId}SearchChangeTimer = setTimeout(() => {
            if(!value.trim()) {
                {$fieldId}Data = {$fieldId}IconList;
            }
            else{
                {$fieldId}Data = {$fieldId}IconList.filter(d => d.indexOf(value.trim()) > -1);
            }
            {$fieldId}Refresh(true);
        }, 100);
    };

    const {$fieldId}Open = () => {
        if({$fieldId}IconList.length) {
            {$fieldId}Refresh(true);
            return;
        }
        axios({
            method: 'get',
            url: '{$url}',
            responseType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 60000,
        }).then(res => {
            let list = res.data.glyphs || [];
            {$fieldId}IconList = list.map(d => d.css);
            {$fieldId}Data = {$fieldId}IconList;
            if({$fieldId}Row) {
                if(list.length && !{$fieldId}Row.{$fieldName}) {
                    {$fieldId}Row.{$fieldName} = {$fieldId}IconList[0].name;
                }
            } else {
                if(list.length && !{$VModel}) {
                    {$VModel} = {$fieldId}IconList[0].name;
                }
            }
           
            {$fieldId}Refresh(true);
        })
        .catch(e => {
            console.log(e);
            TinyModal.message({ message: __blang.bilder_network_error + (e.message || JSON.stringify(e)), status: 'error', messageClosable: true });
        });
    };
EOT;

        $this->setupScript[] = $script;

        $this->addVueToken([
            "{$fieldId}SearchInput",
            "{$fieldId}Search",
            "{$fieldId}OpenIconSelector",
            "{$fieldId}CellClick",
            "{$fieldId}Data",
            "{$fieldId}Open",
            "{$fieldId}GridRef",
            "{$fieldId}PagerConfig",
            "{$fieldId}FetchData"
        ]);
    }
}
