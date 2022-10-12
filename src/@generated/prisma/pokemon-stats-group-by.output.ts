import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_statsCountAggregate } from './pokemon-stats-count-aggregate.output';
import { Pokemon_statsAvgAggregate } from './pokemon-stats-avg-aggregate.output';
import { Pokemon_statsSumAggregate } from './pokemon-stats-sum-aggregate.output';
import { Pokemon_statsMinAggregate } from './pokemon-stats-min-aggregate.output';
import { Pokemon_statsMaxAggregate } from './pokemon-stats-max-aggregate.output';

@ObjectType()
export class Pokemon_statsGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => Pokemon_statsCountAggregate, {nullable:true})
    _count?: Pokemon_statsCountAggregate;

    @Field(() => Pokemon_statsAvgAggregate, {nullable:true})
    _avg?: Pokemon_statsAvgAggregate;

    @Field(() => Pokemon_statsSumAggregate, {nullable:true})
    _sum?: Pokemon_statsSumAggregate;

    @Field(() => Pokemon_statsMinAggregate, {nullable:true})
    _min?: Pokemon_statsMinAggregate;

    @Field(() => Pokemon_statsMaxAggregate, {nullable:true})
    _max?: Pokemon_statsMaxAggregate;
}
