import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_flagsCountAggregate } from './move-flags-count-aggregate.output';
import { Move_flagsAvgAggregate } from './move-flags-avg-aggregate.output';
import { Move_flagsSumAggregate } from './move-flags-sum-aggregate.output';
import { Move_flagsMinAggregate } from './move-flags-min-aggregate.output';
import { Move_flagsMaxAggregate } from './move-flags-max-aggregate.output';

@ObjectType()
export class AggregateMove_flags {

    @Field(() => Move_flagsCountAggregate, {nullable:true})
    _count?: Move_flagsCountAggregate;

    @Field(() => Move_flagsAvgAggregate, {nullable:true})
    _avg?: Move_flagsAvgAggregate;

    @Field(() => Move_flagsSumAggregate, {nullable:true})
    _sum?: Move_flagsSumAggregate;

    @Field(() => Move_flagsMinAggregate, {nullable:true})
    _min?: Move_flagsMinAggregate;

    @Field(() => Move_flagsMaxAggregate, {nullable:true})
    _max?: Move_flagsMaxAggregate;
}
