import { registerEnumType } from '@nestjs/graphql';

export enum Ability_proseScalarFieldEnum {
    ability_id = "ability_id",
    local_language_id = "local_language_id",
    effect = "effect",
    short_effect = "short_effect"
}


registerEnumType(Ability_proseScalarFieldEnum, { name: 'Ability_proseScalarFieldEnum', description: undefined })
