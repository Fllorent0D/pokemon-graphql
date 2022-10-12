import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_effectsCountAggregate } from './move-effects-count-aggregate.output';
import { Move_effectsAvgAggregate } from './move-effects-avg-aggregate.output';
import { Move_effectsSumAggregate } from './move-effects-sum-aggregate.output';
import { Move_effectsMinAggregate } from './move-effects-min-aggregate.output';
import { Move_effectsMaxAggregate } from './move-effects-max-aggregate.output';

@ObjectType()
export class Move_effectsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Move_effectsCountAggregate, {nullable:true})
    _count?: Move_effectsCountAggregate;

    @Field(() => Move_effectsAvgAggregate, {nullable:true})
    _avg?: Move_effectsAvgAggregate;

    @Field(() => Move_effectsSumAggregate, {nullable:true})
    _sum?: Move_effectsSumAggregate;

    @Field(() => Move_effectsMinAggregate, {nullable:true})
    _min?: Move_effectsMinAggregate;

    @Field(() => Move_effectsMaxAggregate, {nullable:true})
    _max?: Move_effectsMaxAggregate;
}
