import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';
import { Type } from 'class-transformer';
import { location_areasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';
import { location_areasWhereUniqueInput } from '../location-areas/location-areas-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Location_areasScalarFieldEnum } from './location-areas-scalar-field.enum';

@ArgsType()
export class FindManylocationAreasArgs {

    @Field(() => location_areasWhereInput, {nullable:true})
    @Type(() => location_areasWhereInput)
    where?: location_areasWhereInput;

    @Field(() => [location_areasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<location_areasOrderByWithRelationInput>;

    @Field(() => location_areasWhereUniqueInput, {nullable:true})
    cursor?: location_areasWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Location_areasScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Location_areasScalarFieldEnum>;
}
