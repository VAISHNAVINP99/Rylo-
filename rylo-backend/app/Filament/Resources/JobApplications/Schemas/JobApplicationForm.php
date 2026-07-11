<?php

namespace App\Filament\Resources\JobApplications\Schemas;


use Filament\Forms\Components\Select;

use Filament\Schemas\Schema;

class JobApplicationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([


            ])
            ->columns(2);
    }
}