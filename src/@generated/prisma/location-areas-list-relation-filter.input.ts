import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';

@InputType()
export class Location_areasListRelationFilter {

    @Field(() => location_areasWhereInput, {nullable:true})
    every?: location_areasWhereInput;

    @Field(() => location_areasWhereInput, {nullable:true})
    some?: location_areasWhereInput;

    @Field(() => location_areasWhereInput, {nullable:true})
    none?: location_areasWhereInput;
}
