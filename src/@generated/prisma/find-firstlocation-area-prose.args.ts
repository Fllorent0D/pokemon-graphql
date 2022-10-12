import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseWhereInput } from '../location-area-prose/location-area-prose-where.input';
import { Type } from 'class-transformer';
import { location_area_proseOrderByWithRelationInput } from '../location-area-prose/location-area-prose-order-by-with-relation.input';
import { location_area_proseWhereUniqueInput } from '../location-area-prose/location-area-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Location_area_proseScalarFieldEnum } from './location-area-prose-scalar-field.enum';

@ArgsType()
export class FindFirstlocationAreaProseArgs {

    @Field(() => location_area_proseWhereInput, {nullable:true})
    @Type(() => location_area_proseWhereInput)
    where?: location_area_proseWhereInput;

    @Field(() => [location_area_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<location_area_proseOrderByWithRelationInput>;

    @Field(() => location_area_proseWhereUniqueInput, {nullable:true})
    cursor?: location_area_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Location_area_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Location_area_proseScalarFieldEnum>;
}
