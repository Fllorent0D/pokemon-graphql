import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokeathlon_statsCountAggregate } from './pokeathlon-stats-count-aggregate.output';
import { Pokeathlon_statsAvgAggregate } from './pokeathlon-stats-avg-aggregate.output';
import { Pokeathlon_statsSumAggregate } from './pokeathlon-stats-sum-aggregate.output';
import { Pokeathlon_statsMinAggregate } from './pokeathlon-stats-min-aggregate.output';
import { Pokeathlon_statsMaxAggregate } from './pokeathlon-stats-max-aggregate.output';

@ObjectType()
export class Pokeathlon_statsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Pokeathlon_statsCountAggregate, {nullable:true})
    _count?: Pokeathlon_statsCountAggregate;

    @Field(() => Pokeathlon_statsAvgAggregate, {nullable:true})
    _avg?: Pokeathlon_statsAvgAggregate;

    @Field(() => Pokeathlon_statsSumAggregate, {nullable:true})
    _sum?: Pokeathlon_statsSumAggregate;

    @Field(() => Pokeathlon_statsMinAggregate, {nullable:true})
    _min?: Pokeathlon_statsMinAggregate;

    @Field(() => Pokeathlon_statsMaxAggregate, {nullable:true})
    _max?: Pokeathlon_statsMaxAggregate;
}
