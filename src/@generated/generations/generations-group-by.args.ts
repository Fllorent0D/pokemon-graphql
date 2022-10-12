import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { generationsOrderByWithAggregationInput } from './generations-order-by-with-aggregation.input';
import { GenerationsScalarFieldEnum } from '../prisma/generations-scalar-field.enum';
import { generationsScalarWhereWithAggregatesInput } from './generations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class generationsGroupByArgs {

    @Field(() => generationsWhereInput, {nullable:true})
    @Type(() => generationsWhereInput)
    where?: generationsWhereInput;

    @Field(() => [generationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<generationsOrderByWithAggregationInput>;

    @Field(() => [GenerationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GenerationsScalarFieldEnum>;

    @Field(() => generationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: generationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
