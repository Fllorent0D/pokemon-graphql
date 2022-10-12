import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseWhereInput } from '../location-area-prose/location-area-prose-where.input';

@InputType()
export class Location_area_proseListRelationFilter {

    @Field(() => location_area_proseWhereInput, {nullable:true})
    every?: location_area_proseWhereInput;

    @Field(() => location_area_proseWhereInput, {nullable:true})
    some?: location_area_proseWhereInput;

    @Field(() => location_area_proseWhereInput, {nullable:true})
    none?: location_area_proseWhereInput;
}
