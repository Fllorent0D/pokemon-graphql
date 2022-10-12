import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseWhereInput } from '../location-area-prose/location-area-prose-where.input';
import { Type } from 'class-transformer';
import { location_area_proseOrderByWithAggregationInput } from '../location-area-prose/location-area-prose-order-by-with-aggregation.input';
import { Location_area_proseScalarFieldEnum } from './location-area-prose-scalar-field.enum';
import { location_area_proseScalarWhereWithAggregatesInput } from '../location-area-prose/location-area-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylocationAreaProseArgs {

    @Field(() => location_area_proseWhereInput, {nullable:true})
    @Type(() => location_area_proseWhereInput)
    where?: location_area_proseWhereInput;

    @Field(() => [location_area_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<location_area_proseOrderByWithAggregationInput>;

    @Field(() => [Location_area_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Location_area_proseScalarFieldEnum>;

    @Field(() => location_area_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: location_area_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
