<?php

namespace App\Filament\Resources\PaymentSettings\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class PaymentSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                    TextInput::make('upi_name')
                ->required(),

            TextInput::make('upi_id')
                ->required(),

           FileUpload::make('qr_code')
    ->disk('public')
    ->directory('payment')
    ->image()
    ->required(),

            Toggle::make('status')
                ->default(true)
            ]);
    }
}
