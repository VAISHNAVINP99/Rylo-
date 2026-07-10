<?php

namespace App\Filament\Resources\TermsConditions\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TermsConditionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('subtitle'),
                TextInput::make('company_name')
                    ->required(),
                Textarea::make('service_booking')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('minimum_booking')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('payments')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('cancellation')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('responsibility_one')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('responsibility_two')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('responsibility_three')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('location')
                    ->required(),
                Toggle::make('status')
                ->default(true)
                    ->required(),
            ]);
    }
}
