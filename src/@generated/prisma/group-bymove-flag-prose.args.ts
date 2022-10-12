import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseWhereInput } from '../move-flag-prose/move-flag-prose-where.input';
import { Type } from 'class-transformer';
import { move_flag_proseOrderByWithAggregationInput } from '../move-flag-prose/move-flag-prose-order-by-with-aggregation.input';
import { Move_flag_proseScalarFieldEnum } from './move-flag-prose-scalar-field.enum';
import { move_flag_proseScalarWhereWithAggregatesInput } from '../move-flag-prose/move-flag-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveFlagProseArgs {

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    @Type(() => move_flag_proseWhereInput)
    where?: move_flag_proseWhereInput;

    @Field(() => [move_flag_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_flag_proseOrderByWithAggregationInput>;

    @Field(() => [Move_flag_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_flag_proseScalarFieldEnum>;

    @Field(() => move_flag_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_flag_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
