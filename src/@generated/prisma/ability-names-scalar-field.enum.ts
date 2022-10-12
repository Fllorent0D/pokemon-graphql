import { registerEnumType } from '@nestjs/graphql';

export enum Ability_namesScalarFieldEnum {
    ability_id = "ability_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Ability_namesScalarFieldEnum, { name: 'Ability_namesScalarFieldEnum', description: undefined })
