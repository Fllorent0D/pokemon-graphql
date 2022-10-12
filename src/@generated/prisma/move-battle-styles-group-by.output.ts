import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_battle_stylesCountAggregate } from './move-battle-styles-count-aggregate.output';
import { Move_battle_stylesAvgAggregate } from './move-battle-styles-avg-aggregate.output';
import { Move_battle_stylesSumAggregate } from './move-battle-styles-sum-aggregate.output';
import { Move_battle_stylesMinAggregate } from './move-battle-styles-min-aggregate.output';
import { Move_battle_stylesMaxAggregate } from './move-battle-styles-max-aggregate.output';

@ObjectType()
export class Move_battle_stylesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Move_battle_stylesCountAggregate, {nullable:true})
    _count?: Move_battle_stylesCountAggregate;

    @Field(() => Move_battle_stylesAvgAggregate, {nullable:true})
    _avg?: Move_battle_stylesAvgAggregate;

    @Field(() => Move_battle_stylesSumAggregate, {nullable:true})
    _sum?: Move_battle_stylesSumAggregate;

    @Field(() => Move_battle_stylesMinAggregate, {nullable:true})
    _min?: Move_battle_stylesMinAggregate;

    @Field(() => Move_battle_stylesMaxAggregate, {nullable:true})
    _max?: Move_battle_stylesMaxAggregate;
}
