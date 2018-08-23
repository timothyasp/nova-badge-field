# Laravel Nova Color Field

Simple Laravel Nova Badge field.  It extends the `Select` field and allows a simple mapping of colors to values to display a "Badge" in the index.

### Details Page

![details page select](https://cdn-pro.dprcdn.net/files/acc_465612/S5MDqi)

### Index 

![index badge](https://cdn-pro.dprcdn.net/files/acc_465612/gibgjD)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require timothyasp/nova-badge-field
```

## Usage

```
Badge::make('Field')
   ->options($options)
   ->colors([
      'option1' => '#ffffff',
      'option2' => '#000000'
   ]);
```

## Credits

- [Timothy Asp](https://github.com/timothyasp)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
