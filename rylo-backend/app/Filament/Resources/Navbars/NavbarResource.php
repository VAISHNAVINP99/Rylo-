<?php

namespace App\Filament\Resources\Navbars;

use App\Filament\Resources\Navbars\Pages\CreateNavbar;
use App\Filament\Resources\Navbars\Pages\EditNavbar;
use App\Filament\Resources\Navbars\Pages\ListNavbars;
use App\Filament\Resources\Navbars\Schemas\NavbarForm;
use App\Filament\Resources\Navbars\Tables\NavbarsTable;
use App\Models\Navbar;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class NavbarResource extends Resource
{
    protected static ?string $model = Navbar::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Logo Add';

protected static string|\UnitEnum|null $navigationGroup = 'Website Management';

protected static ?int $navigationSort = 13;

    public static function form(Schema $schema): Schema
    {
        return NavbarForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return NavbarsTable::configure($table);
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
            'index' => ListNavbars::route('/'),
            'create' => CreateNavbar::route('/create'),
            'edit' => EditNavbar::route('/{record}/edit'),
        ];
    }
}
