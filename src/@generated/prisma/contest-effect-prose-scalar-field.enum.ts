import { registerEnumType } from '@nestjs/graphql';

export enum Contest_effect_proseScalarFieldEnum {
    contest_effect_id = "contest_effect_id",
    local_language_id = "local_language_id",
    flavor_text = "flavor_text",
    effect = "effect"
}


registerEnumType(Contest_effect_proseScalarFieldEnum, { name: 'Contest_effect_proseScalarFieldEnum', description: undefined })
