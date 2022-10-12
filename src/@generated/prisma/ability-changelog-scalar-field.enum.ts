import { registerEnumType } from '@nestjs/graphql';

export enum Ability_changelogScalarFieldEnum {
    id = "id",
    ability_id = "ability_id",
    changed_in_version_group_id = "changed_in_version_group_id"
}


registerEnumType(Ability_changelogScalarFieldEnum, { name: 'Ability_changelogScalarFieldEnum', description: undefined })
