import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_move_method_proseScalarFieldEnum {
    pokemon_move_method_id = "pokemon_move_method_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Pokemon_move_method_proseScalarFieldEnum, { name: 'Pokemon_move_method_proseScalarFieldEnum', description: undefined })
