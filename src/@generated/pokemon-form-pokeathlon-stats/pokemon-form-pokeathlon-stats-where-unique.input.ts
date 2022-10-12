import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsPokemon_form_idPokeathlon_stat_idCompoundUniqueInput } from './pokemon-form-pokeathlon-stats-pokemon-form-id-pokeathlon-stat-id-compound-unique.input';

@InputType()
export class pokemon_form_pokeathlon_statsWhereUniqueInput {

    @Field(() => pokemon_form_pokeathlon_statsPokemon_form_idPokeathlon_stat_idCompoundUniqueInput, {nullable:true})
    pokemon_form_id_pokeathlon_stat_id?: pokemon_form_pokeathlon_statsPokemon_form_idPokeathlon_stat_idCompoundUniqueInput;
}
