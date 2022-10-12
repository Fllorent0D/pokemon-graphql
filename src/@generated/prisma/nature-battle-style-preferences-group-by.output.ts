import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Nature_battle_style_preferencesCountAggregate } from './nature-battle-style-preferences-count-aggregate.output';
import { Nature_battle_style_preferencesAvgAggregate } from './nature-battle-style-preferences-avg-aggregate.output';
import { Nature_battle_style_preferencesSumAggregate } from './nature-battle-style-preferences-sum-aggregate.output';
import { Nature_battle_style_preferencesMinAggregate } from './nature-battle-style-preferences-min-aggregate.output';
import { Nature_battle_style_preferencesMaxAggregate } from './nature-battle-style-preferences-max-aggregate.output';

@ObjectType()
export class Nature_battle_style_preferencesGroupBy {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => Nature_battle_style_preferencesCountAggregate, {nullable:true})
    _count?: Nature_battle_style_preferencesCountAggregate;

    @Field(() => Nature_battle_style_preferencesAvgAggregate, {nullable:true})
    _avg?: Nature_battle_style_preferencesAvgAggregate;

    @Field(() => Nature_battle_style_preferencesSumAggregate, {nullable:true})
    _sum?: Nature_battle_style_preferencesSumAggregate;

    @Field(() => Nature_battle_style_preferencesMinAggregate, {nullable:true})
    _min?: Nature_battle_style_preferencesMinAggregate;

    @Field(() => Nature_battle_style_preferencesMaxAggregate, {nullable:true})
    _max?: Nature_battle_style_preferencesMaxAggregate;
}
