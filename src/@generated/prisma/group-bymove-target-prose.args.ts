import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseWhereInput } from '../move-target-prose/move-target-prose-where.input';
import { Type } from 'class-transformer';
import { move_target_proseOrderByWithAggregationInput } from '../move-target-prose/move-target-prose-order-by-with-aggregation.input';
import { Move_target_proseScalarFieldEnum } from './move-target-prose-scalar-field.enum';
import { move_target_proseScalarWhereWithAggregatesInput } from '../move-target-prose/move-target-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveTargetProseArgs {

    @Field(() => move_target_proseWhereInput, {nullable:true})
    @Type(() => move_target_proseWhereInput)
    where?: move_target_proseWhereInput;

    @Field(() => [move_target_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_target_proseOrderByWithAggregationInput>;

    @Field(() => [Move_target_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_target_proseScalarFieldEnum>;

    @Field(() => move_target_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_target_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
