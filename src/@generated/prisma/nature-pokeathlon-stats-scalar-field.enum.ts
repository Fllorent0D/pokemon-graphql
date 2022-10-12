import { registerEnumType } from '@nestjs/graphql';

export enum Nature_pokeathlon_statsScalarFieldEnum {
    nature_id = "nature_id",
    pokeathlon_stat_id = "pokeathlon_stat_id",
    max_change = "max_change"
}


registerEnumType(Nature_pokeathlon_statsScalarFieldEnum, { name: 'Nature_pokeathlon_statsScalarFieldEnum', description: undefined })
