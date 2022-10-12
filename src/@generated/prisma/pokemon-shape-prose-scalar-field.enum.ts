import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_shape_proseScalarFieldEnum {
    pokemon_shape_id = "pokemon_shape_id",
    local_language_id = "local_language_id",
    name = "name",
    awesome_name = "awesome_name"
}


registerEnumType(Pokemon_shape_proseScalarFieldEnum, { name: 'Pokemon_shape_proseScalarFieldEnum', description: undefined })
