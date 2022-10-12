import { registerEnumType } from '@nestjs/graphql';

export enum Location_areasScalarFieldEnum {
    id = "id",
    location_id = "location_id",
    game_index = "game_index",
    identifier = "identifier"
}


registerEnumType(Location_areasScalarFieldEnum, { name: 'Location_areasScalarFieldEnum', description: undefined })
