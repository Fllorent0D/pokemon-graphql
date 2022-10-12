import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { locationsOrderByWithAggregationInput } from './locations-order-by-with-aggregation.input';
import { LocationsScalarFieldEnum } from '../prisma/locations-scalar-field.enum';
import { locationsScalarWhereWithAggregatesInput } from './locations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class locationsGroupByArgs {

    @Field(() => locationsWhereInput, {nullable:true})
    @Type(() => locationsWhereInput)
    where?: locationsWhereInput;

    @Field(() => [locationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<locationsOrderByWithAggregationInput>;

    @Field(() => [LocationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LocationsScalarFieldEnum>;

    @Field(() => locationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: locationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
