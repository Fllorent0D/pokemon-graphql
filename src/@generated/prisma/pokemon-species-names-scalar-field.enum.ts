import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_species_namesScalarFieldEnum {
    pokemon_species_id = "pokemon_species_id",
    local_language_id = "local_language_id",
    name = "name",
    genus = "genus"
}


registerEnumType(Pokemon_species_namesScalarFieldEnum, { name: 'Pokemon_species_namesScalarFieldEnum', description: undefined })
