import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';

@InputType()
export class Location_areasRelationFilter {

    @Field(() => location_areasWhereInput, {nullable:true})
    is?: location_areasWhereInput;

    @Field(() => location_areasWhereInput, {nullable:true})
    isNot?: location_areasWhereInput;
}
