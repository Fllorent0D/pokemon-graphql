import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_effect_proseCountAggregate } from './move-effect-prose-count-aggregate.output';
import { Move_effect_proseAvgAggregate } from './move-effect-prose-avg-aggregate.output';
import { Move_effect_proseSumAggregate } from './move-effect-prose-sum-aggregate.output';
import { Move_effect_proseMinAggregate } from './move-effect-prose-min-aggregate.output';
import { Move_effect_proseMaxAggregate } from './move-effect-prose-max-aggregate.output';

@ObjectType()
export class AggregateMove_effect_prose {

    @Field(() => Move_effect_proseCountAggregate, {nullable:true})
    _count?: Move_effect_proseCountAggregate;

    @Field(() => Move_effect_proseAvgAggregate, {nullable:true})
    _avg?: Move_effect_proseAvgAggregate;

    @Field(() => Move_effect_proseSumAggregate, {nullable:true})
    _sum?: Move_effect_proseSumAggregate;

    @Field(() => Move_effect_proseMinAggregate, {nullable:true})
    _min?: Move_effect_proseMinAggregate;

    @Field(() => Move_effect_proseMaxAggregate, {nullable:true})
    _max?: Move_effect_proseMaxAggregate;
}
