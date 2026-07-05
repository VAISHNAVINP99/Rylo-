<?php

namespace App\Filament\Resources\PrivacyPolicies\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;

class PrivacyPolicyForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Title')
                    ->required(),

                TextInput::make('subtitle')
                    ->label('Subtitle'),

                RichEditor::make('information_collect')
                    ->label('Information We Collect')
                    ->required(),

                RichEditor::make('information_usage')
                    ->label('How We Use Your Information')
                    ->required(),

                RichEditor::make('data_protection')
                    ->label('Data Protection')
                    ->required(),

                RichEditor::make('third_party')
                    ->label('Third Party Disclosure')
                    ->required(),

                TextInput::make('email')
                    ->email()
                    ->required(),

                TextInput::make('phone')
                    ->required(),

                TextInput::make('location')
                    ->required(),

                Toggle::make('status')
                    ->default(true),
            ]);
    }
}