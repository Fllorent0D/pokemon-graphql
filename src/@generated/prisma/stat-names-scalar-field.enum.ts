import { registerEnumType } from '@nestjs/graphql';

export enum Stat_namesScalarFieldEnum {
    stat_id = "stat_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Stat_namesScalarFieldEnum, { name: 'Stat_namesScalarFieldEnum', description: undefined })
