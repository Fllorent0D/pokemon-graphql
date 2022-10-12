import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesWhereInput } from '../contest-type-names/contest-type-names-where.input';
import { Type } from 'class-transformer';
import { contest_type_namesOrderByWithAggregationInput } from '../contest-type-names/contest-type-names-order-by-with-aggregation.input';
import { Contest_type_namesScalarFieldEnum } from './contest-type-names-scalar-field.enum';
import { contest_type_namesScalarWhereWithAggregatesInput } from '../contest-type-names/contest-type-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycontestTypeNamesArgs {

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    @Type(() => contest_type_namesWhereInput)
    where?: contest_type_namesWhereInput;

    @Field(() => [contest_type_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<contest_type_namesOrderByWithAggregationInput>;

    @Field(() => [Contest_type_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Contest_type_namesScalarFieldEnum>;

    @Field(() => contest_type_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: contest_type_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
