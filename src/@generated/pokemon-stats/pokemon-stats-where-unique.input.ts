import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsPokemon_idStat_idCompoundUniqueInput } from './pokemon-stats-pokemon-id-stat-id-compound-unique.input';

@InputType()
export class pokemon_statsWhereUniqueInput {

    @Field(() => pokemon_statsPokemon_idStat_idCompoundUniqueInput, {nullable:true})
    pokemon_id_stat_id?: pokemon_statsPokemon_idStat_idCompoundUniqueInput;
}
