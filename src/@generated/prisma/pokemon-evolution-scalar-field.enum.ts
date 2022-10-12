import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_evolutionScalarFieldEnum {
    id = "id",
    evolved_species_id = "evolved_species_id",
    evolution_trigger_id = "evolution_trigger_id",
    trigger_item_id = "trigger_item_id",
    minimum_level = "minimum_level",
    gender = "gender",
    location_id = "location_id",
    held_item_id = "held_item_id",
    time_of_day = "time_of_day",
    known_move_id = "known_move_id",
    minimum_happiness = "minimum_happiness",
    minimum_beauty = "minimum_beauty",
    relative_physical_stats = "relative_physical_stats",
    party_species_id = "party_species_id",
    trade_species_id = "trade_species_id"
}


registerEnumType(Pokemon_evolutionScalarFieldEnum, { name: 'Pokemon_evolutionScalarFieldEnum', description: undefined })
