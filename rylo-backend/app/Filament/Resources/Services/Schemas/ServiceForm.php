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

            FileUpload::make('image')
    ->image()
    ->disk('public')
    ->directory('services'),

            Forms\Components\Toggle::make('status')
                ->default(true),

        ]);
}



}

