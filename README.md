# Laravel Nova Badge Field

Works with Nova 4!

---

This is a simple Laravel Nova Badge field. It extends the `Select` field and allows a simple mapping of colors to values to
display a "Badge" on the index and details pages.  Can be customized with tailwind classes

### Details Page

![details page select](https://cdn-pro.dprcdn.net/files/acc_465612/S5MDqi)

### Index

![index badge](https://cdn-pro.dprcdn.net/files/acc_465612/gibgjD)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require timothyasp/nova-badge-field
```

For Nova v1 - v3 support, use `"timothyasp/nova-badge-field": "^1.04"` in your `composer.json`

## Usage

In addition to any of the `Select` field options and presentation methods, here are a few `Badge` specific
customizations this package provides.

To customize the text color of the badge, set the `color` attribute on the option. If there isn't an option set, it
defaults to setting the background color and the text color is set to a contrasting white/black color based on the
brightness of the background.

```
use Timothyasp\Badge\Badge;

$options = [
    'option1' => 'Option 1',
    'option2' => 'Option 2'
];

Badge::make('Field')
   ->options($options)
   ->colors([
      'option1' => '#ffffff',
      'option2' => '#000000'
   ]);
```

If you prefer to use the `label` as the display text on the index and detail pages, you can use
the `->displayUsingLabels()` option.

```
use Timothyasp\Badge\Badge;

$options = [
  'Option 1' => 1,
  'Option 2' => 2
];

Badge::make('Field')
   ->options($options)
   ->colors([
      'Option 1' => '#ffffff',
      'Option 2' => '#000000'
   ])->displayUsingLabels();
```

Finally, if you need even more customization on the badge display, use the `extraClasses` method to pass along any
additional Tailwind classes to customize the appearance of the `Badge`.  

This is useful if you'd like to customize the badges to be stacking instead of inline, when using the `Stack` field. 

```
use Timothyasp\Badge\Badge;

$options = [
    'option1' => 'Option 1',
    'option2' => 'Option 2'
];

Badge::make('Field')
    ->options($options)
    ->extraClasses('mr-2 text-4xl flex');
```

## Credits

- [Timothy Asp](https://github.com/timothyasp)
- [@timcv](https://github.com/timcv)
- [@batFormat](https://github.com/batFormat)
- [@ShaneShipston](https://github.com/ShaneShipston)

Built for [QuizGriz - the #1 online trivia and quiz game site](https://grizly.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
