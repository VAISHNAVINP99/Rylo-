<?php

namespace App\Filament\Resources\Navbars\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;

class NavbarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                   Forms\Components\FileUpload::make('logo')
            ->disk('public')
            ->directory('navbar')
            ->image()
            ->imageEditor()
            ->required(),
            ]);
    }
}
