<?php

namespace App\Filament\Resources\HeroSections\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class HeroSectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('welcome_text')
                    ->default(null),
                TextInput::make('title')
                    ->required(),
                TextInput::make('subtitle')
                    ->default(null),
                Textarea::make('description')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('button1_text')
                    ->required()
                    ->default('Book Service'),
                TextInput::make('button1_link')
                    ->required()
                    ->default('/book-now'),
                TextInput::make('button2_text')
                    ->required()
                    ->default('WhatsApp'),
                TextInput::make('button2_link')
                    ->default(null),
             FileUpload::make('image')
    ->image()
    ->disk('public')
    ->directory('hero')
    ->visibility('public')
    ->required(),
                TextInput::make('happy_clients')
                    ->required()
                    ->numeric()
                    ->default(500),
                TextInput::make('support')
                    ->required()
                    ->default('24/7'),
                TextInput::make('trusted_service')
                    ->required()
                    ->default('100%'),
                Toggle::make('status')
                    ->required(),
            ]);
    }
}
