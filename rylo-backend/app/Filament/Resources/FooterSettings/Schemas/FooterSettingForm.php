<?php

namespace App\Filament\Resources\FooterSettings\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class FooterSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('company_name')
                    ->required(),
                TextInput::make('tagline')
                    ->default(null),
                Textarea::make('description')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('address')
                    ->required(),
                TextInput::make('facebook url')
                    ->default(null),
                TextInput::make('instagram url')
                    ->default(null),
                TextInput::make('whatsapp number')
                    ->default(null),
                TextInput::make('copyright')
                    ->required(),
                Toggle::make('status')
                ->default(true)
                    ->required(),
            ]);
    }
}
