import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereInput } from '../location-names/location-names-where.input';
import { Type } from 'class-transformer';
import { location_namesOrderByWithAggregationInput } from '../location-names/location-names-order-by-with-aggregation.input';
import { Location_namesScalarFieldEnum } from './location-names-scalar-field.enum';
import { location_namesScalarWhereWithAggregatesInput } from '../location-names/location-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylocationNamesArgs {

    @Field(() => location_namesWhereInput, {nullable:true})
    @Type(() => location_namesWhereInput)
    where?: location_namesWhereInput;

    @Field(() => [location_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<location_namesOrderByWithAggregationInput>;

    @Field(() => [Location_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Location_namesScalarFieldEnum>;

    @Field(() => location_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: location_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
