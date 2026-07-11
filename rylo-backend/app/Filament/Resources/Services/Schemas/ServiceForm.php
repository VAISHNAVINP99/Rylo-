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
                    ->label('Service Name')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('description')
                    ->label('Description')
                    ->rows(5)
                    ->required()
                    ->columnSpanFull(),

                Forms\Components\FileUpload::make('image')
                    ->label('Service Image')
                    ->image()
                    ->directory('services')
                    ->disk('public')
                    ->imageEditor(),

                Forms\Components\Select::make('working_category')
                    ->label('Working Category')
                    ->searchable()
                    ->required(),

                Forms\Components\TextInput::make('working_time')
                    ->label('Working Time')
                    ->placeholder('Example: Minimum 4 Hours')
                    ->required(),

                Forms\Components\TextInput::make('price')
                    ->label('Price')
                    ->numeric()
                    ->prefix('₹')
                    ->required(),

                Forms\Components\Toggle::make('status')
                    ->label('Status')
                    ->default(true)
                    ->inline(false),


        ]);
}



}

