import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_species_flavor_textScalarFieldEnum {
    species_id = "species_id",
    version_id = "version_id",
    language_id = "language_id",
    flavor_text = "flavor_text"
}


registerEnumType(Pokemon_species_flavor_textScalarFieldEnum, { name: 'Pokemon_species_flavor_textScalarFieldEnum', description: undefined })
