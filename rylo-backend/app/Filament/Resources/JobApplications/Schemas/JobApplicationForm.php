<?php

namespace App\Filament\Resources\JobApplications\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Schema;

class JobApplicationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                TextInput::make('email')
                    ->email()
                    ->required(),

                TextInput::make('phone')
                    ->tel()
                    ->required(),

                TextInput::make('position'),

                Textarea::make('message')
                    ->columnSpanFull(),

             FileUpload::make('resume')
    ->disk('public')
    ->directory('resumes')
    ->preserveFilenames()
    ->downloadable()
    ->openable()
    ->dehydrated(fn ($state) => filled($state)),

                Select::make('status')
                    ->options([
                        'Pending' => 'Pending',
                        'Shortlisted' => 'Shortlisted',
                        'Rejected' => 'Rejected',
                    ]),
            ])
            ->columns(2);
    }
}