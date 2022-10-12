import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesWhereInput } from '../generation-names/generation-names-where.input';
import { Type } from 'class-transformer';
import { generation_namesOrderByWithAggregationInput } from '../generation-names/generation-names-order-by-with-aggregation.input';
import { Generation_namesScalarFieldEnum } from './generation-names-scalar-field.enum';
import { generation_namesScalarWhereWithAggregatesInput } from '../generation-names/generation-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygenerationNamesArgs {

    @Field(() => generation_namesWhereInput, {nullable:true})
    @Type(() => generation_namesWhereInput)
    where?: generation_namesWhereInput;

    @Field(() => [generation_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<generation_namesOrderByWithAggregationInput>;

    @Field(() => [Generation_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Generation_namesScalarFieldEnum>;

    @Field(() => generation_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: generation_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
