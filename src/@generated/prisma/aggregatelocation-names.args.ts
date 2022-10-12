import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereInput } from '../location-names/location-names-where.input';
import { Type } from 'class-transformer';
import { location_namesOrderByWithRelationInput } from '../location-names/location-names-order-by-with-relation.input';
import { location_namesWhereUniqueInput } from '../location-names/location-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatelocationNamesArgs {

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
}
