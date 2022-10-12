import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_itemsScalarFieldEnum {
    pokemon_id = "pokemon_id",
    version_id = "version_id",
    item_id = "item_id",
    rarity = "rarity"
}


registerEnumType(Pokemon_itemsScalarFieldEnum, { name: 'Pokemon_itemsScalarFieldEnum', description: undefined })
