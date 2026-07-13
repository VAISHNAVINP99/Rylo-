<?php

namespace App\Filament\Resources\PaymentSettings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;


class PaymentSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                    ImageColumn::make('qr_code'),

            TextColumn::make('upi_name'),

            TextColumn::make('upi_id'),

            IconColumn::make('status')
                ->boolean(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
