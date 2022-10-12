import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_battle_style_proseCountAggregate } from './move-battle-style-prose-count-aggregate.output';
import { Move_battle_style_proseAvgAggregate } from './move-battle-style-prose-avg-aggregate.output';
import { Move_battle_style_proseSumAggregate } from './move-battle-style-prose-sum-aggregate.output';
import { Move_battle_style_proseMinAggregate } from './move-battle-style-prose-min-aggregate.output';
import { Move_battle_style_proseMaxAggregate } from './move-battle-style-prose-max-aggregate.output';

@ObjectType()
export class AggregateMove_battle_style_prose {

    @Field(() => Move_battle_style_proseCountAggregate, {nullable:true})
    _count?: Move_battle_style_proseCountAggregate;

    @Field(() => Move_battle_style_proseAvgAggregate, {nullable:true})
    _avg?: Move_battle_style_proseAvgAggregate;

    @Field(() => Move_battle_style_proseSumAggregate, {nullable:true})
    _sum?: Move_battle_style_proseSumAggregate;

    @Field(() => Move_battle_style_proseMinAggregate, {nullable:true})
    _min?: Move_battle_style_proseMinAggregate;

    @Field(() => Move_battle_style_proseMaxAggregate, {nullable:true})
    _max?: Move_battle_style_proseMaxAggregate;
}
