import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { regionsOrderByWithAggregationInput } from './regions-order-by-with-aggregation.input';
import { RegionsScalarFieldEnum } from '../prisma/regions-scalar-field.enum';
import { regionsScalarWhereWithAggregatesInput } from './regions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class regionsGroupByArgs {

    @Field(() => regionsWhereInput, {nullable:true})
    @Type(() => regionsWhereInput)
    where?: regionsWhereInput;

    @Field(() => [regionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<regionsOrderByWithAggregationInput>;

    @Field(() => [RegionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RegionsScalarFieldEnum>;

    @Field(() => regionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: regionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
