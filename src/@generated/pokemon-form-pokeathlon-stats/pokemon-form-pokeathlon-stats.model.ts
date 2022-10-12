import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokeathlon_stats } from '../pokeathlon-stats/pokeathlon-stats.model';
import { pokemon_forms } from '../pokemon-forms/pokemon-forms.model';

@ObjectType()
export class pokemon_form_pokeathlon_stats {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => Int, {nullable:false})
    minimum_stat!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    maximum_stat!: number;

    @Field(() => pokeathlon_stats, {nullable:false})
    pokeathlon_stats?: pokeathlon_stats;

    @Field(() => pokemon_forms, {nullable:false})
    pokemon_forms?: pokemon_forms;
}
