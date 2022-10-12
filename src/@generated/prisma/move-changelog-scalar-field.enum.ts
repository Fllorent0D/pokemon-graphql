import { registerEnumType } from '@nestjs/graphql';

export enum Move_changelogScalarFieldEnum {
    move_id = "move_id",
    changed_in_version_group_id = "changed_in_version_group_id",
    type_id = "type_id",
    effect_id = "effect_id",
    effect_chance = "effect_chance"
}


registerEnumType(Move_changelogScalarFieldEnum, { name: 'Move_changelogScalarFieldEnum', description: undefined })
