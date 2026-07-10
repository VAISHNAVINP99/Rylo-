<?php

namespace App\Filament\Resources\Navbars\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;


class NavbarsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                  ImageColumn::make('logo')
                ->disk('public')
                ->height(60),
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
