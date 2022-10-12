import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereInput } from '../location-names/location-names-where.input';
import { Type } from 'class-transformer';
import { location_namesOrderByWithRelationInput } from '../location-names/location-names-order-by-with-relation.input';
import { location_namesWhereUniqueInput } from '../location-names/location-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Location_namesScalarFieldEnum } from './location-names-scalar-field.enum';

@ArgsType()
export class FindManylocationNamesArgs {

    @Field(() => location_namesWhereInput, {nullable:true})
    @Type(() => location_namesWhereInput)
    where?: location_namesWhereInput;

    @Field(() => [location_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<location_namesOrderByWithRelationInput>;

    @Field(() => location_namesWhereUniqueInput, {nullable:true})
    cursor?: location_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Location_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Location_namesScalarFieldEnum>;
}
