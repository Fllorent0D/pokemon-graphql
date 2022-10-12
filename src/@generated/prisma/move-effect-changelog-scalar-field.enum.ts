import { registerEnumType } from '@nestjs/graphql';

export enum Move_effect_changelogScalarFieldEnum {
    id = "id",
    effect_id = "effect_id",
    changed_in_version_group_id = "changed_in_version_group_id"
}


registerEnumType(Move_effect_changelogScalarFieldEnum, { name: 'Move_effect_changelogScalarFieldEnum', description: undefined })
