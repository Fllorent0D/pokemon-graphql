import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_egg_groupsScalarFieldEnum {
    species_id = "species_id",
    egg_group_id = "egg_group_id"
}


registerEnumType(Pokemon_egg_groupsScalarFieldEnum, { name: 'Pokemon_egg_groupsScalarFieldEnum', description: undefined })
