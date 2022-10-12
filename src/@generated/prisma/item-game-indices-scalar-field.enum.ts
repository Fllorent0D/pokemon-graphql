import { registerEnumType } from '@nestjs/graphql';

export enum Item_game_indicesScalarFieldEnum {
    item_id = "item_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(Item_game_indicesScalarFieldEnum, { name: 'Item_game_indicesScalarFieldEnum', description: undefined })
