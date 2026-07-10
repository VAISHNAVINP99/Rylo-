<?php

namespace App\Filament\Resources\Services\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\IconColumn;

class ServicesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            
            ->columns([
ImageColumn::make('image')
    ->disk('public')
    ->visibility('public')
    ->height(60)
    ->width(60),

Tables\Columns\TextColumn::make('title')
    ->searchable()
    ->sortable(),

Tables\Columns\TextColumn::make('description')
    ->limit(50)
    ->tooltip(fn ($record) => $record->description)
    ->wrap(),

Tables\Columns\TextColumn::make('price')
    ->money('INR')
    ->sortable(),

Tables\Columns\TextColumn::make('feature1')
    ->label('Feature 1')
    ->placeholder('-')
    ->toggleable(),

Tables\Columns\TextColumn::make('feature2')
    ->label('Feature 2')
    ->placeholder('-')
    ->toggleable(),

Tables\Columns\TextColumn::make('feature3')
    ->label('Feature 3')
    ->placeholder('-')
    ->toggleable(),

Tables\Columns\TextColumn::make('feature4')
    ->label('Feature 4')
    ->placeholder('-')
    ->toggleable(),

Tables\Columns\IconColumn::make('status')
    ->boolean(),

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
