import { registerEnumType } from '@nestjs/graphql';

export enum Super_contest_effect_proseScalarFieldEnum {
    super_contest_effect_id = "super_contest_effect_id",
    local_language_id = "local_language_id",
    flavor_text = "flavor_text"
}


registerEnumType(Super_contest_effect_proseScalarFieldEnum, { name: 'Super_contest_effect_proseScalarFieldEnum', description: undefined })
