import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsWhereInput } from '../move-effects/move-effects-where.input';
import { Type } from 'class-transformer';
import { move_effectsOrderByWithAggregationInput } from '../move-effects/move-effects-order-by-with-aggregation.input';
import { Move_effectsScalarFieldEnum } from './move-effects-scalar-field.enum';
import { move_effectsScalarWhereWithAggregatesInput } from '../move-effects/move-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveEffectsArgs {

    @Field(() => move_effectsWhereInput, {nullable:true})
    @Type(() => move_effectsWhereInput)
    where?: move_effectsWhereInput;

    @Field(() => [move_effectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_effectsOrderByWithAggregationInput>;

    @Field(() => [Move_effectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_effectsScalarFieldEnum>;

    @Field(() => move_effectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_effectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
