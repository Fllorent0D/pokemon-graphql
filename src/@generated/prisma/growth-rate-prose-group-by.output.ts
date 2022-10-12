import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Growth_rate_proseCountAggregate } from './growth-rate-prose-count-aggregate.output';
import { Growth_rate_proseAvgAggregate } from './growth-rate-prose-avg-aggregate.output';
import { Growth_rate_proseSumAggregate } from './growth-rate-prose-sum-aggregate.output';
import { Growth_rate_proseMinAggregate } from './growth-rate-prose-min-aggregate.output';
import { Growth_rate_proseMaxAggregate } from './growth-rate-prose-max-aggregate.output';

@ObjectType()
export class Growth_rate_proseGroupBy {

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Growth_rate_proseCountAggregate, {nullable:true})
    _count?: Growth_rate_proseCountAggregate;

    @Field(() => Growth_rate_proseAvgAggregate, {nullable:true})
    _avg?: Growth_rate_proseAvgAggregate;

    @Field(() => Growth_rate_proseSumAggregate, {nullable:true})
    _sum?: Growth_rate_proseSumAggregate;

    @Field(() => Growth_rate_proseMinAggregate, {nullable:true})
    _min?: Growth_rate_proseMinAggregate;

    @Field(() => Growth_rate_proseMaxAggregate, {nullable:true})
    _max?: Growth_rate_proseMaxAggregate;
}
