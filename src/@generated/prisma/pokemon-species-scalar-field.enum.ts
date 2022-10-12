import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_speciesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    generation_id = "generation_id",
    evolves_from_species_id = "evolves_from_species_id",
    evolution_chain_id = "evolution_chain_id",
    color_id = "color_id",
    shape_id = "shape_id",
    habitat_id = "habitat_id",
    gender_rate = "gender_rate",
    capture_rate = "capture_rate",
    base_happiness = "base_happiness",
    is_baby = "is_baby",
    hatch_counter = "hatch_counter",
    has_gender_differences = "has_gender_differences",
    growth_rate_id = "growth_rate_id",
    forms_switchable = "forms_switchable"
}


registerEnumType(Pokemon_speciesScalarFieldEnum, { name: 'Pokemon_speciesScalarFieldEnum', description: undefined })
