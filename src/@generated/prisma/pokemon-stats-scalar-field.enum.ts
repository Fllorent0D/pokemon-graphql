import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_statsScalarFieldEnum {
    pokemon_id = "pokemon_id",
    stat_id = "stat_id",
    base_stat = "base_stat",
    effort = "effort"
}


registerEnumType(Pokemon_statsScalarFieldEnum, { name: 'Pokemon_statsScalarFieldEnum', description: undefined })
