<?php

namespace App\Filament\Resources\Ctas;

use App\Filament\Resources\Ctas\Pages\CreateCta;
use App\Filament\Resources\Ctas\Pages\EditCta;
use App\Filament\Resources\Ctas\Pages\ListCtas;
use App\Filament\Resources\Ctas\Schemas\CtaForm;
use App\Filament\Resources\Ctas\Tables\CtasTable;
use App\Models\Cta;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class CtaResource extends Resource
{
  protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMegaphone;

protected static string|\UnitEnum|null $navigationGroup = 'Website Management';

protected static ?string $navigationLabel = 'Call To Action';

protected static ?int $navigationSort = 7;

    public static function form(Schema $schema): Schema
    {
        return CtaForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CtasTable::configure($table);
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
            'index' => ListCtas::route('/'),
            'create' => CreateCta::route('/create'),
            'edit' => EditCta::route('/{record}/edit'),
        ];
    }
}
