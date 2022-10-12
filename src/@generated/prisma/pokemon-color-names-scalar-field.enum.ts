import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_color_namesScalarFieldEnum {
    pokemon_color_id = "pokemon_color_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Pokemon_color_namesScalarFieldEnum, { name: 'Pokemon_color_namesScalarFieldEnum', description: undefined })
