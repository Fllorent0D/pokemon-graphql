import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';
import { Type } from 'class-transformer';
import { location_areasOrderByWithAggregationInput } from '../location-areas/location-areas-order-by-with-aggregation.input';
import { Location_areasScalarFieldEnum } from './location-areas-scalar-field.enum';
import { location_areasScalarWhereWithAggregatesInput } from '../location-areas/location-areas-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylocationAreasArgs {

    @Field(() => location_areasWhereInput, {nullable:true})
    @Type(() => location_areasWhereInput)
    where?: location_areasWhereInput;

    @Field(() => [location_areasOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<location_areasOrderByWithAggregationInput>;

    @Field(() => [Location_areasScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Location_areasScalarFieldEnum>;

    @Field(() => location_areasScalarWhereWithAggregatesInput, {nullable:true})
    having?: location_areasScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
