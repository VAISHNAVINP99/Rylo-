<?php

namespace App\Filament\Resources\Abouts\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;

class AboutsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
               ImageColumn::make('image')
        ->disk('public')
        ->height(80)
        ->width(120)
        ->label('Image'),

    TextColumn::make('company_name')
        ->label('Company')
        ->searchable()
        ->sortable(),

    TextColumn::make('hero_title')
        ->label('Hero Title')
        ->limit(30)
        ->searchable(),

    TextColumn::make('hero_subtitle')
        ->label('Hero Subtitle')
        ->limit(40),

    TextColumn::make('who_we_are_title')
        ->label('Who We Are')
        ->limit(25),

    TextColumn::make('whatsapp')
        ->label('WhatsApp')
        ->searchable(),

    IconColumn::make('status')
        ->boolean()
        ->label('Status'),

    TextColumn::make('created_at')
        ->label('Created')
        ->dateTime('d M Y')
        ->sortable(),

    TextColumn::make('updated_at')
        ->label('Updated')
        ->dateTime('d M Y')
        ->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
