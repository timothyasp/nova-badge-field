<?php

namespace Timothyasp\Badge;

use Laravel\Nova\Fields\Select;

class Badge extends Select
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'badge';

    /**
     * Map of values to colors to be used as badge colors.
     *
     * @param $map
     * @return Badge
     */
    public function colors($map)
    {
        return $this->withMeta(['colorMap' => $map]);
    }

    public function displayUsingLabels()
    {
        $this->withMeta(['useLabel' => true]);

        return $this;
    }
}
