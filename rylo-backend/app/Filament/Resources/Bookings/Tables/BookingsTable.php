<?php

namespace App\Filament\Resources\Bookings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
   use Filament\Actions\Action;
use Filament\Forms\Components\Select;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('customer_name')
                    ->searchable(),
                TextColumn::make('mobile')
                    ->searchable(),
                TextColumn::make('whatsapp')
                    ->searchable(),
                    TextColumn::make('email')
    ->label('Email'),
               TextColumn::make('service.title')
    ->label('Service')
    ->searchable()
    ->sortable(),
                TextColumn::make('date')
                    ->date()
                    ->sortable(),
                TextColumn::make('time')
                    ->time()
                    ->sortable(),
                TextColumn::make('location')
                    ->searchable(),
                    
                      TextColumn::make('status')
            ->badge()
            ->color(fn (string $state) => match ($state) {
                'Pending' => 'warning',
                'Confirmed' => 'info',
                'Completed' => 'success',
                'Cancelled' => 'danger',
                default => 'gray',
            }),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),


  
            ])
            ->filters([
                //
            ])
            ->recordActions([
               
Action::make('changeStatus')
    ->label('Change Status')
    ->icon('heroicon-o-pencil-square')
    ->form([
        Select::make('status')
            ->options([
                'Pending' => 'Pending',
                'Confirmed' => 'Confirmed',
                'Completed' => 'Completed',
                'Cancelled' => 'Cancelled',
            ])
            ->required(),
    ])
    ->fillForm(fn ($record) => [
        'status' => $record->status,
    ])
    ->action(function ($record, array $data) {
        $record->update([
            'status' => $data['status'],
        ]);

          }),

            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
