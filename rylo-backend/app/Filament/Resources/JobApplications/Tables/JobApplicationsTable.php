<?php

namespace App\Filament\Resources\JobApplications\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class JobApplicationsTable
{
    public static function configure(Table $table): Table
    {
        return $table

            ->defaultSort('created_at', 'desc')

            ->columns([

                TextColumn::make('name')
                    ->label('Applicant')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('phone')
                    ->label('Phone')
                    ->searchable()
                    ->copyable(),

                TextColumn::make('whatsapp')
                    ->label('WhatsApp')
                    ->searchable()
                    ->copyable(),

                TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),

                TextColumn::make('place')
                    ->label('Place')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('job_type')
                    ->label('Job Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Full Time' => 'success',
                        'Part Time' => 'warning',
                        default => 'gray',
                    }),

                TextColumn::make('position')
                    ->label('Position')
                    ->searchable(),

                TextColumn::make('resume')
                    ->label('Resume')
                    ->url(fn ($record) => asset('storage/' . $record->resume))
                    ->openUrlInNewTab()
                    ->formatStateUsing(fn () => 'Download'),

                TextColumn::make('status')
                    ->badge()
                    ->sortable()
                    ->color(fn (string $state): string => match ($state) {
                        'Pending' => 'warning',
                        'Reviewed' => 'info',
                        'Selected' => 'success',
                        'Rejected' => 'danger',
                        default => 'gray',
                    }),

                TextColumn::make('created_at')
                    ->label('Applied On')
                    ->dateTime('d M Y h:i A')
                    ->sortable(),

            ])

            ->filters([

                SelectFilter::make('status')
                    ->options([
                        'Pending' => 'Pending',
                        'Reviewed' => 'Reviewed',
                        'Selected' => 'Selected',
                        'Rejected' => 'Rejected',
                    ]),

                SelectFilter::make('job_type')
                    ->options([
                        'Full Time' => 'Full Time',
                        'Part Time' => 'Part Time',
                    ]),

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