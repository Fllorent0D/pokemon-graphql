import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_species_proseScalarFieldEnum {
    pokemon_species_id = "pokemon_species_id",
    local_language_id = "local_language_id",
    form_description = "form_description"
}


registerEnumType(Pokemon_species_proseScalarFieldEnum, { name: 'Pokemon_species_proseScalarFieldEnum', description: undefined })
