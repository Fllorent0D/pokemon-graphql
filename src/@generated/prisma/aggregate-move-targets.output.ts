import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_targetsCountAggregate } from './move-targets-count-aggregate.output';
import { Move_targetsAvgAggregate } from './move-targets-avg-aggregate.output';
import { Move_targetsSumAggregate } from './move-targets-sum-aggregate.output';
import { Move_targetsMinAggregate } from './move-targets-min-aggregate.output';
import { Move_targetsMaxAggregate } from './move-targets-max-aggregate.output';

@ObjectType()
export class AggregateMove_targets {

    @Field(() => Move_targetsCountAggregate, {nullable:true})
    _count?: Move_targetsCountAggregate;

    @Field(() => Move_targetsAvgAggregate, {nullable:true})
    _avg?: Move_targetsAvgAggregate;

    @Field(() => Move_targetsSumAggregate, {nullable:true})
    _sum?: Move_targetsSumAggregate;

    @Field(() => Move_targetsMinAggregate, {nullable:true})
    _min?: Move_targetsMinAggregate;

    @Field(() => Move_targetsMaxAggregate, {nullable:true})
    _max?: Move_targetsMaxAggregate;
}
