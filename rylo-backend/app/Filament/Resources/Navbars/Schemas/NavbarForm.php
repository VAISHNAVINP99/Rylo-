<?php

namespace App\Filament\Resources\Navbars\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\FileUpload;

class NavbarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                 FileUpload::make('logo')
    ->image()
    ->disk('public')
    ->directory('navbar'),
            ]);
    }
}
