import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesWhereInput } from '../move-names/move-names-where.input';
import { Type } from 'class-transformer';
import { move_namesOrderByWithAggregationInput } from '../move-names/move-names-order-by-with-aggregation.input';
import { Move_namesScalarFieldEnum } from './move-names-scalar-field.enum';
import { move_namesScalarWhereWithAggregatesInput } from '../move-names/move-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveNamesArgs {

    @Field(() => move_namesWhereInput, {nullable:true})
    @Type(() => move_namesWhereInput)
    where?: move_namesWhereInput;

    @Field(() => [move_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_namesOrderByWithAggregationInput>;

    @Field(() => [Move_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_namesScalarFieldEnum>;

    @Field(() => move_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
