import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_flag_proseCountAggregate } from './move-flag-prose-count-aggregate.output';
import { Move_flag_proseAvgAggregate } from './move-flag-prose-avg-aggregate.output';
import { Move_flag_proseSumAggregate } from './move-flag-prose-sum-aggregate.output';
import { Move_flag_proseMinAggregate } from './move-flag-prose-min-aggregate.output';
import { Move_flag_proseMaxAggregate } from './move-flag-prose-max-aggregate.output';

@ObjectType()
export class AggregateMove_flag_prose {

    @Field(() => Move_flag_proseCountAggregate, {nullable:true})
    _count?: Move_flag_proseCountAggregate;

    @Field(() => Move_flag_proseAvgAggregate, {nullable:true})
    _avg?: Move_flag_proseAvgAggregate;

    @Field(() => Move_flag_proseSumAggregate, {nullable:true})
    _sum?: Move_flag_proseSumAggregate;

    @Field(() => Move_flag_proseMinAggregate, {nullable:true})
    _min?: Move_flag_proseMinAggregate;

    @Field(() => Move_flag_proseMaxAggregate, {nullable:true})
    _max?: Move_flag_proseMaxAggregate;
}
