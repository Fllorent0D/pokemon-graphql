import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesOrderByWithAggregationInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-with-aggregation.input';
import { Nature_battle_style_preferencesScalarFieldEnum } from './nature-battle-style-preferences-scalar-field.enum';
import { nature_battle_style_preferencesScalarWhereWithAggregatesInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBynatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereInput)
    where?: nature_battle_style_preferencesWhereInput;

    @Field(() => [nature_battle_style_preferencesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<nature_battle_style_preferencesOrderByWithAggregationInput>;

    @Field(() => [Nature_battle_style_preferencesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Nature_battle_style_preferencesScalarFieldEnum>;

    @Field(() => nature_battle_style_preferencesScalarWhereWithAggregatesInput, {nullable:true})
    having?: nature_battle_style_preferencesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
