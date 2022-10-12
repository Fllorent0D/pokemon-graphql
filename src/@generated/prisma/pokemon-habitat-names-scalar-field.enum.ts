import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_habitat_namesScalarFieldEnum {
    pokemon_habitat_id = "pokemon_habitat_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Pokemon_habitat_namesScalarFieldEnum, { name: 'Pokemon_habitat_namesScalarFieldEnum', description: undefined })
