import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesWhereInput } from '../contest-types/contest-types-where.input';
import { Type } from 'class-transformer';
import { contest_typesOrderByWithAggregationInput } from '../contest-types/contest-types-order-by-with-aggregation.input';
import { Contest_typesScalarFieldEnum } from './contest-types-scalar-field.enum';
import { contest_typesScalarWhereWithAggregatesInput } from '../contest-types/contest-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycontestTypesArgs {

    @Field(() => contest_typesWhereInput, {nullable:true})
    @Type(() => contest_typesWhereInput)
    where?: contest_typesWhereInput;

    @Field(() => [contest_typesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<contest_typesOrderByWithAggregationInput>;

    @Field(() => [Contest_typesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Contest_typesScalarFieldEnum>;

    @Field(() => contest_typesScalarWhereWithAggregatesInput, {nullable:true})
    having?: contest_typesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
