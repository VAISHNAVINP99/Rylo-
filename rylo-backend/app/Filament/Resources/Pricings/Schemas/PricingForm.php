<?php

namespace App\Filament\Resources\Pricings\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class PricingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('hourly_price')
                    ->numeric()
                    ->default(null)
                    ->prefix('$'),
                TextInput::make('daily_price')
                    ->numeric()
                    ->default(null)
                    ->prefix('$'),
                TextInput::make('weekly_price')
                    ->numeric()
                    ->default(null)
                    ->prefix('$'),
                TextInput::make('feature1')
                    ->default(null),
                TextInput::make('feature2')
                    ->default(null),
                TextInput::make('feature3')
                    ->default(null),
                TextInput::make('feature4')
                    ->default(null),
                Toggle::make('status')
                ->default(true)
                    ->required(),
            ]);
    }
}
