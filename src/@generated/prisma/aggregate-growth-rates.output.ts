import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Growth_ratesCountAggregate } from './growth-rates-count-aggregate.output';
import { Growth_ratesAvgAggregate } from './growth-rates-avg-aggregate.output';
import { Growth_ratesSumAggregate } from './growth-rates-sum-aggregate.output';
import { Growth_ratesMinAggregate } from './growth-rates-min-aggregate.output';
import { Growth_ratesMaxAggregate } from './growth-rates-max-aggregate.output';

@ObjectType()
export class AggregateGrowth_rates {

    @Field(() => Growth_ratesCountAggregate, {nullable:true})
    _count?: Growth_ratesCountAggregate;

    @Field(() => Growth_ratesAvgAggregate, {nullable:true})
    _avg?: Growth_ratesAvgAggregate;

    @Field(() => Growth_ratesSumAggregate, {nullable:true})
    _sum?: Growth_ratesSumAggregate;

    @Field(() => Growth_ratesMinAggregate, {nullable:true})
    _min?: Growth_ratesMinAggregate;

    @Field(() => Growth_ratesMaxAggregate, {nullable:true})
    _max?: Growth_ratesMaxAggregate;
}
