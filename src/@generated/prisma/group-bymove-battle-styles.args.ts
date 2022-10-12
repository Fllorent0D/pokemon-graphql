import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesWhereInput } from '../move-battle-styles/move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { move_battle_stylesOrderByWithAggregationInput } from '../move-battle-styles/move-battle-styles-order-by-with-aggregation.input';
import { Move_battle_stylesScalarFieldEnum } from './move-battle-styles-scalar-field.enum';
import { move_battle_stylesScalarWhereWithAggregatesInput } from '../move-battle-styles/move-battle-styles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveBattleStylesArgs {

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    @Type(() => move_battle_stylesWhereInput)
    where?: move_battle_stylesWhereInput;

    @Field(() => [move_battle_stylesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_battle_stylesOrderByWithAggregationInput>;

    @Field(() => [Move_battle_stylesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_battle_stylesScalarFieldEnum>;

    @Field(() => move_battle_stylesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_battle_stylesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
