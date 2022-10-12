import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsWhereInput } from '../move-flags/move-flags-where.input';
import { Type } from 'class-transformer';
import { move_flagsOrderByWithAggregationInput } from '../move-flags/move-flags-order-by-with-aggregation.input';
import { Move_flagsScalarFieldEnum } from './move-flags-scalar-field.enum';
import { move_flagsScalarWhereWithAggregatesInput } from '../move-flags/move-flags-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveFlagsArgs {

    @Field(() => move_flagsWhereInput, {nullable:true})
    @Type(() => move_flagsWhereInput)
    where?: move_flagsWhereInput;

    @Field(() => [move_flagsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_flagsOrderByWithAggregationInput>;

    @Field(() => [Move_flagsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_flagsScalarFieldEnum>;

    @Field(() => move_flagsScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_flagsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
