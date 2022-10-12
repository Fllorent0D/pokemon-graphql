import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesWhereInput } from '../type-names/type-names-where.input';
import { Type } from 'class-transformer';
import { type_namesOrderByWithAggregationInput } from '../type-names/type-names-order-by-with-aggregation.input';
import { Type_namesScalarFieldEnum } from './type-names-scalar-field.enum';
import { type_namesScalarWhereWithAggregatesInput } from '../type-names/type-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBytypeNamesArgs {

    @Field(() => type_namesWhereInput, {nullable:true})
    @Type(() => type_namesWhereInput)
    where?: type_namesWhereInput;

    @Field(() => [type_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<type_namesOrderByWithAggregationInput>;

    @Field(() => [Type_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Type_namesScalarFieldEnum>;

    @Field(() => type_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: type_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
