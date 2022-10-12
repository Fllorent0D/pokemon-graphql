import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_form_pokeathlon_statsScalarFieldEnum {
    pokemon_form_id = "pokemon_form_id",
    pokeathlon_stat_id = "pokeathlon_stat_id",
    minimum_stat = "minimum_stat",
    base_stat = "base_stat",
    maximum_stat = "maximum_stat"
}


registerEnumType(Pokemon_form_pokeathlon_statsScalarFieldEnum, { name: 'Pokemon_form_pokeathlon_statsScalarFieldEnum', description: undefined })
