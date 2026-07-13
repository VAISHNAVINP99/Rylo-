<?php

namespace App\Filament\Resources\JobApplications\Schemas;

use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;

class JobApplicationInfolist
{
    public static function configure(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Section::make('Job Application Details')
                    ->schema([

                        TextEntry::make('name')
                            ->label('Full Name'),

                        TextEntry::make('phone')
                            ->label('Phone'),

                        TextEntry::make('whatsapp')
                            ->label('WhatsApp'),

                        TextEntry::make('email')
                            ->label('Email'),

                        TextEntry::make('place')
                            ->label('Place'),

                        TextEntry::make('job_type')
                            ->label('Job Type'),

                        TextEntry::make('position')
                            ->label('Position'),

                        TextEntry::make('resume')
                            ->label('Resume')
                            ->url(fn ($record) => asset('storage/' . $record->resume))
                            ->openUrlInNewTab(),

                        TextEntry::make('message')
                            ->label('Message')
                            ->columnSpanFull(),

                        TextEntry::make('status')
                            ->badge(),

                        TextEntry::make('created_at')
                            ->label('Applied On')
                            ->dateTime(),

                    ])
                    ->columns(2),
            ]);
    }
}