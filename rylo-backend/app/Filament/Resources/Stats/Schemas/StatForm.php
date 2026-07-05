<?php

namespace App\Filament\Resources\Stats\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class StatForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                  TextInput::make('value')
                    ->label('Value')
                    ->required(),

                TextInput::make('title')
                    ->label('Title')
                    ->required(),

                Toggle::make('status')
                    ->default(true),
            ]);
    }
}
