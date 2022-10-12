import { registerEnumType } from '@nestjs/graphql';

export enum Move_effect_proseScalarFieldEnum {
    move_effect_id = "move_effect_id",
    local_language_id = "local_language_id",
    short_effect = "short_effect",
    effect = "effect"
}


registerEnumType(Move_effect_proseScalarFieldEnum, { name: 'Move_effect_proseScalarFieldEnum', description: undefined })
