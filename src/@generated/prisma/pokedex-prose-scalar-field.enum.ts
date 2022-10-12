import { registerEnumType } from '@nestjs/graphql';

export enum Pokedex_proseScalarFieldEnum {
    pokedex_id = "pokedex_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Pokedex_proseScalarFieldEnum, { name: 'Pokedex_proseScalarFieldEnum', description: undefined })
