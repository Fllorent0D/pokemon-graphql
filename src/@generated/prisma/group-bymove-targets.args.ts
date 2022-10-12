import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsWhereInput } from '../move-targets/move-targets-where.input';
import { Type } from 'class-transformer';
import { move_targetsOrderByWithAggregationInput } from '../move-targets/move-targets-order-by-with-aggregation.input';
import { Move_targetsScalarFieldEnum } from './move-targets-scalar-field.enum';
import { move_targetsScalarWhereWithAggregatesInput } from '../move-targets/move-targets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveTargetsArgs {

    @Field(() => move_targetsWhereInput, {nullable:true})
    @Type(() => move_targetsWhereInput)
    where?: move_targetsWhereInput;

    @Field(() => [move_targetsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_targetsOrderByWithAggregationInput>;

    @Field(() => [Move_targetsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_targetsScalarFieldEnum>;

    @Field(() => move_targetsScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_targetsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
