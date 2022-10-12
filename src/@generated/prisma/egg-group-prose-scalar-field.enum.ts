import { registerEnumType } from '@nestjs/graphql';

export enum Egg_group_proseScalarFieldEnum {
    egg_group_id = "egg_group_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Egg_group_proseScalarFieldEnum, { name: 'Egg_group_proseScalarFieldEnum', description: undefined })
