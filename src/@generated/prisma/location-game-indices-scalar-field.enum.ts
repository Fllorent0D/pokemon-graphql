import { registerEnumType } from '@nestjs/graphql';

export enum Location_game_indicesScalarFieldEnum {
    location_id = "location_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(Location_game_indicesScalarFieldEnum, { name: 'Location_game_indicesScalarFieldEnum', description: undefined })
