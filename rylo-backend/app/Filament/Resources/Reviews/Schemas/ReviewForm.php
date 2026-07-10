<?php

namespace App\Filament\Resources\Reviews\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                FileUpload::make('image')
    ->image()
    ->disk('public'),
    
                TextInput::make('rating')
                    ->required()
                    ->numeric()
                    ->default(5),
                Textarea::make('review')
                    ->required()
                    ->columnSpanFull(),
                Toggle::make('status')
                ->default(true)
                    ->required(),
            ]);
    }
}
