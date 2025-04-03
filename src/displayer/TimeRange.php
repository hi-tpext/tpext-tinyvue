<?php

namespace tpext\builder\displayer;

class TimeRange extends Time
{
    protected $size = [2, 3];

    public function created($type = '')
    {
        parent::created($type);
        $this->jsOptions['start-placeholder'] = __blang('bilder_date_range_from');
        $this->jsOptions['end-placeholder'] = __blang('bilder_date_range_to');
        $this->jsOptions['range-separator'] = ',';
        $this->jsOptions['is-range'] = true;
    }

    /**
     * Undocumented function
     * ','
     * @param string $val
     * @return $this
     */
    public function separator($val = ',')
    {
        $this->jsOptions['range-separator'] = $val;
        return $this;
    }

    protected function fieldScript()
    {
        $VModel = $this->getVModel();

        $separator = $this->jsOptions['range-separator'];

        $script = <<<EOT

        if (Array.isArray({$VModel})) {
            {$VModel} = {$VModel}.join('{$separator}');
        }

EOT;
        $this->convertScript[] = $script;
    }
}
