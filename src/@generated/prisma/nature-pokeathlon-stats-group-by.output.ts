import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Nature_pokeathlon_statsCountAggregate } from './nature-pokeathlon-stats-count-aggregate.output';
import { Nature_pokeathlon_statsAvgAggregate } from './nature-pokeathlon-stats-avg-aggregate.output';
import { Nature_pokeathlon_statsSumAggregate } from './nature-pokeathlon-stats-sum-aggregate.output';
import { Nature_pokeathlon_statsMinAggregate } from './nature-pokeathlon-stats-min-aggregate.output';
import { Nature_pokeathlon_statsMaxAggregate } from './nature-pokeathlon-stats-max-aggregate.output';

@ObjectType()
export class Nature_pokeathlon_statsGroupBy {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => Int, {nullable:false})
    max_change!: number;

    @Field(() => Nature_pokeathlon_statsCountAggregate, {nullable:true})
    _count?: Nature_pokeathlon_statsCountAggregate;

    @Field(() => Nature_pokeathlon_statsAvgAggregate, {nullable:true})
    _avg?: Nature_pokeathlon_statsAvgAggregate;

    @Field(() => Nature_pokeathlon_statsSumAggregate, {nullable:true})
    _sum?: Nature_pokeathlon_statsSumAggregate;

    @Field(() => Nature_pokeathlon_statsMinAggregate, {nullable:true})
    _min?: Nature_pokeathlon_statsMinAggregate;

    @Field(() => Nature_pokeathlon_statsMaxAggregate, {nullable:true})
    _max?: Nature_pokeathlon_statsMaxAggregate;
}
