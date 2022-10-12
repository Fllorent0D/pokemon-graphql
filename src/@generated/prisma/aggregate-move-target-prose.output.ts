import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_target_proseCountAggregate } from './move-target-prose-count-aggregate.output';
import { Move_target_proseAvgAggregate } from './move-target-prose-avg-aggregate.output';
import { Move_target_proseSumAggregate } from './move-target-prose-sum-aggregate.output';
import { Move_target_proseMinAggregate } from './move-target-prose-min-aggregate.output';
import { Move_target_proseMaxAggregate } from './move-target-prose-max-aggregate.output';

@ObjectType()
export class AggregateMove_target_prose {

    @Field(() => Move_target_proseCountAggregate, {nullable:true})
    _count?: Move_target_proseCountAggregate;

    @Field(() => Move_target_proseAvgAggregate, {nullable:true})
    _avg?: Move_target_proseAvgAggregate;

    @Field(() => Move_target_proseSumAggregate, {nullable:true})
    _sum?: Move_target_proseSumAggregate;

    @Field(() => Move_target_proseMinAggregate, {nullable:true})
    _min?: Move_target_proseMinAggregate;

    @Field(() => Move_target_proseMaxAggregate, {nullable:true})
    _max?: Move_target_proseMaxAggregate;
}
