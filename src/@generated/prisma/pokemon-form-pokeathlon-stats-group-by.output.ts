import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_form_pokeathlon_statsCountAggregate } from './pokemon-form-pokeathlon-stats-count-aggregate.output';
import { Pokemon_form_pokeathlon_statsAvgAggregate } from './pokemon-form-pokeathlon-stats-avg-aggregate.output';
import { Pokemon_form_pokeathlon_statsSumAggregate } from './pokemon-form-pokeathlon-stats-sum-aggregate.output';
import { Pokemon_form_pokeathlon_statsMinAggregate } from './pokemon-form-pokeathlon-stats-min-aggregate.output';
import { Pokemon_form_pokeathlon_statsMaxAggregate } from './pokemon-form-pokeathlon-stats-max-aggregate.output';

@ObjectType()
export class Pokemon_form_pokeathlon_statsGroupBy {

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

    @Field(() => Pokemon_form_pokeathlon_statsCountAggregate, {nullable:true})
    _count?: Pokemon_form_pokeathlon_statsCountAggregate;

    @Field(() => Pokemon_form_pokeathlon_statsAvgAggregate, {nullable:true})
    _avg?: Pokemon_form_pokeathlon_statsAvgAggregate;

    @Field(() => Pokemon_form_pokeathlon_statsSumAggregate, {nullable:true})
    _sum?: Pokemon_form_pokeathlon_statsSumAggregate;

    @Field(() => Pokemon_form_pokeathlon_statsMinAggregate, {nullable:true})
    _min?: Pokemon_form_pokeathlon_statsMinAggregate;

    @Field(() => Pokemon_form_pokeathlon_statsMaxAggregate, {nullable:true})
    _max?: Pokemon_form_pokeathlon_statsMaxAggregate;
}
