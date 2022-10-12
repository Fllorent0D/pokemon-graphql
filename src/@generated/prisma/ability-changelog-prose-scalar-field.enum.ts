import { registerEnumType } from '@nestjs/graphql';

export enum Ability_changelog_proseScalarFieldEnum {
    ability_changelog_id = "ability_changelog_id",
    local_language_id = "local_language_id",
    effect = "effect"
}


registerEnumType(Ability_changelog_proseScalarFieldEnum, { name: 'Ability_changelog_proseScalarFieldEnum', description: undefined })
