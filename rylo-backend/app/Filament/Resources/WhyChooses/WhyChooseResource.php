<?php

namespace App\Filament\Resources\WhyChooses;

use App\Filament\Resources\WhyChooses\Pages\CreateWhyChoose;
use App\Filament\Resources\WhyChooses\Pages\EditWhyChoose;
use App\Filament\Resources\WhyChooses\Pages\ListWhyChooses;
use App\Filament\Resources\WhyChooses\Schemas\WhyChooseForm;
use App\Filament\Resources\WhyChooses\Tables\WhyChoosesTable;
use App\Models\WhyChoose;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class WhyChooseResource extends Resource
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCheckBadge;

protected static string|\UnitEnum|null $navigationGroup = 'Website Management';

protected static ?string $navigationLabel = 'Why Choose';

protected static ?int $navigationSort = 6;

    public static function form(Schema $schema): Schema
    {
        return WhyChooseForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return WhyChoosesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListWhyChooses::route('/'),
            'create' => CreateWhyChoose::route('/create'),
            'edit' => EditWhyChoose::route('/{record}/edit'),
        ];
    }
}
