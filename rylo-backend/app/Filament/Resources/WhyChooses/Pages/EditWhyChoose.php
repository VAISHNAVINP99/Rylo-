<?php

namespace App\Filament\Resources\WhyChooses\Pages;

use App\Filament\Resources\WhyChooses\WhyChooseResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditWhyChoose extends EditRecord
{
    protected static string $resource = WhyChooseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
