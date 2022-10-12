import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_typesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    type_id = "type_id",
    slot = "slot"
}


registerEnumType(Pokemon_typesScalarFieldEnum, { name: 'Pokemon_typesScalarFieldEnum', description: undefined })
