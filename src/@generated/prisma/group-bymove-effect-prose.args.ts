import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseWhereInput } from '../move-effect-prose/move-effect-prose-where.input';
import { Type } from 'class-transformer';
import { move_effect_proseOrderByWithAggregationInput } from '../move-effect-prose/move-effect-prose-order-by-with-aggregation.input';
import { Move_effect_proseScalarFieldEnum } from './move-effect-prose-scalar-field.enum';
import { move_effect_proseScalarWhereWithAggregatesInput } from '../move-effect-prose/move-effect-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveEffectProseArgs {

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    @Type(() => move_effect_proseWhereInput)
    where?: move_effect_proseWhereInput;

    @Field(() => [move_effect_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_effect_proseOrderByWithAggregationInput>;

    @Field(() => [Move_effect_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_effect_proseScalarFieldEnum>;

    @Field(() => move_effect_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_effect_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
