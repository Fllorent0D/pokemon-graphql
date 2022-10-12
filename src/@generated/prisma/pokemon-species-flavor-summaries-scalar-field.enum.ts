import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_species_flavor_summariesScalarFieldEnum {
    pokemon_species_id = "pokemon_species_id",
    local_language_id = "local_language_id",
    flavor_summary = "flavor_summary"
}


registerEnumType(Pokemon_species_flavor_summariesScalarFieldEnum, { name: 'Pokemon_species_flavor_summariesScalarFieldEnum', description: undefined })
