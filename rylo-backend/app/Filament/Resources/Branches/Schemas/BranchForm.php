<?php

namespace App\Filament\Resources\Branches\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;

class BranchForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                 TextInput::make('branch_name')
            ->required(),

       Textarea::make('address')
            ->rows(4)
            ->required(),

       TextInput::make('phone')
            ->tel(),

       TextInput::make('email')
            ->email(),

       Toggle::make('status')
            ->default(true)
            ]);
    }
}
