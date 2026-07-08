<?php

namespace App\Filament\Resources\Abouts\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\TextColumn;

class AboutForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
            FileUpload::make('image')
    ->image()
    ->disk('public')
    ->directory('about'),

TextInput::make('hero_title')
    ->required(),

TextInput::make('hero_subtitle')
    ->required(),

TextInput::make('who_we_are_title')
    ->required(),
TextInput::make('company_name')
    ->required(),

RichEditor::make('description_one')
    ->required(),

RichEditor::make('description_two')
    ->required(),

RichEditor::make('mission')
    ->required(),

RichEditor::make('vision')
    ->required(),

TextInput::make('cta_title')
    ->required(),

Textarea::make('cta_description')
    ->required(),

TextInput::make('cta_button')
    ->required(),

TextInput::make('whatsapp')
    ->required(),

Toggle::make('status')
    ->default(true)
            ]);
    }
}
