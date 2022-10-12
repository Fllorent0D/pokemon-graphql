import { registerEnumType } from '@nestjs/graphql';

export enum Pokeathlon_stat_namesScalarFieldEnum {
    pokeathlon_stat_id = "pokeathlon_stat_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Pokeathlon_stat_namesScalarFieldEnum, { name: 'Pokeathlon_stat_namesScalarFieldEnum', description: undefined })
