<?php

namespace tpext\builder\displayer;

class DateRange extends DateTimeRange
{
    protected $timespan = 'Y-m-d';

    protected $type = 'daterange';

    public function created($type = '')
    {
        parent::created($type);
        $this->jsOptions['format'] = 'yyyy-MM-dd';
        $this->jsOptions['value-format'] = 'yyyy-MM-dd';
        $this->jsOptions['time-format'] = '';
    }

    /**
     * Undocumented function
     * @param string $val yyyy-MM-dd
     * @return $this
     */
    public function format($val)
    {
        $val = str_replace(['Y', 'D'], ['y', 'd'], $val);
        $val = str_replace(['h', 'H', 'm', 's', ':'], '', $val);
        $this->jsOptions['format'] = $val;
        $this->jsOptions['value-format'] = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @param string $val
     * @return $this
     */
    public function timespan($val = 'Y-m-d')
    {
        $this->timespan = $val;
        return $this;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function renderValue()
    {
        if (!is_null($this->renderValue)) {
            return $this->renderValue;
        }
        
        $value = parent::renderValue();

        $arr = explode($this->jsOptions['range-separator'], $value);

        /**
         * 数字格式时间戳自动转为日期格式
         * 但要避免没有`-/`分割的时间格式被转换，如：20200630 => 1970-08-23 03:17:10
         * 解决办法，截取前字符串4位，如果大于2099或小于1900则认为是时间戳，否则认为是`-/`分割的时间
         * 如果值是数字但可以确定值不是时间戳，可主动使用->timespan('')清空格式避免自动转换。
         */
        if ($this->timespan && isset($arr[0]) && is_numeric($arr[0]) && $arr[0] > 0) {
            $char4 = substr((string)$arr[0], 0, 4);

            if ($char4 < 1900 || $char4 > 2099) //1900~2099区间不会误判
            {
                $arr[0] = date($this->timespan, $arr[0]);
            }
        }

        if ($this->timespan && isset($arr[1]) && is_numeric($arr[1]) && $arr[1] > 0) {
            $char4 = substr((string)$arr[1], 0, 4);

            if ($char4 < 1900 || $char4 > 2099) //1900~2099区间不会误判
            {
                $arr[1] = date($this->timespan, $arr[1]);
            }
        }

        $this->renderValue = implode($this->jsOptions['range-separator'], $arr);

        return $this->renderValue;
    }
}