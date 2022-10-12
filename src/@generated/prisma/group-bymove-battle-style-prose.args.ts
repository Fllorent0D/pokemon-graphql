import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseWhereInput } from '../move-battle-style-prose/move-battle-style-prose-where.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseOrderByWithAggregationInput } from '../move-battle-style-prose/move-battle-style-prose-order-by-with-aggregation.input';
import { Move_battle_style_proseScalarFieldEnum } from './move-battle-style-prose-scalar-field.enum';
import { move_battle_style_proseScalarWhereWithAggregatesInput } from '../move-battle-style-prose/move-battle-style-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    @Type(() => move_battle_style_proseWhereInput)
    where?: move_battle_style_proseWhereInput;

    @Field(() => [move_battle_style_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_battle_style_proseOrderByWithAggregationInput>;

    @Field(() => [Move_battle_style_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_battle_style_proseScalarFieldEnum>;

    @Field(() => move_battle_style_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_battle_style_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
