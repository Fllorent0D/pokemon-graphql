import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_abilitiesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    ability_id = "ability_id",
    is_dream = "is_dream",
    slot = "slot"
}


registerEnumType(Pokemon_abilitiesScalarFieldEnum, { name: 'Pokemon_abilitiesScalarFieldEnum', description: undefined })
