<?php

namespace App\Filament\Resources\WhyChooses\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class WhyChooseForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
    ->required(),

Textarea::make('description')
    ->required(),

TextInput::make('icon')
    ->helperText('Example: FaUserCheck'),

Toggle::make('status')
    ->default(true)
            ]);
    }
}
