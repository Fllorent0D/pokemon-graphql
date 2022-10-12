import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_game_indicesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(Pokemon_game_indicesScalarFieldEnum, { name: 'Pokemon_game_indicesScalarFieldEnum', description: undefined })
