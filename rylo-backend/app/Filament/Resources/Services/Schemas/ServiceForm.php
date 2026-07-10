<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Tables;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\Select;


class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
        
        ->schema([

            Forms\Components\TextInput::make('title')
                ->required(),

            Forms\Components\TextInput::make('slug')
                ->required()
                ->unique(ignoreRecord: true),

            Forms\Components\Textarea::make('description'),

            Forms\Components\TextInput::make('price')
                ->numeric()
                ->required(),
                TextInput::make('feature1')
    ->label('Feature 1')
    ->maxLength(255),

TextInput::make('feature2')
    ->label('Feature 2')
    ->maxLength(255),

TextInput::make('feature3')
    ->label('Feature 3')
    ->maxLength(255),

TextInput::make('feature4')
    ->label('Feature 4')
    ->maxLength(255),

            FileUpload::make('image')
    ->image()
    ->disk('public')
    ->directory('services'),

            Forms\Components\Toggle::make('status')
                ->default(true),

        ]);
}



}

