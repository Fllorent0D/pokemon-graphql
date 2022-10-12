import { registerEnumType } from '@nestjs/graphql';

export enum Stat_hint_namesScalarFieldEnum {
    stat_hint_id = "stat_hint_id",
    local_language_id = "local_language_id",
    message = "message"
}


registerEnumType(Stat_hint_namesScalarFieldEnum, { name: 'Stat_hint_namesScalarFieldEnum', description: undefined })
