import { registerEnumType } from '@nestjs/graphql';

export enum Ability_flavor_textScalarFieldEnum {
    ability_id = "ability_id",
    version_group_id = "version_group_id",
    language_id = "language_id",
    flavor_text = "flavor_text"
}


registerEnumType(Ability_flavor_textScalarFieldEnum, { name: 'Ability_flavor_textScalarFieldEnum', description: undefined })
