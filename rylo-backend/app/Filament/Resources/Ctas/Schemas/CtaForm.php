<?php

namespace App\Filament\Resources\Ctas\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class CtaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                 TextInput::make('title')
                    ->required(),

                TextInput::make('phone')
                    ->tel()
                    ->required(),

                TextInput::make('whatsapp')
                    ->required(),

                TextInput::make('text for call  url')
                    ->required(),

                TextInput::make('text for whatsapp url')
                    ->required(),

                Toggle::make('status')
                    ->default(true),
            ]);
    }
}
