import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereInput } from '../location-names/location-names-where.input';

@InputType()
export class Location_namesListRelationFilter {

    @Field(() => location_namesWhereInput, {nullable:true})
    every?: location_namesWhereInput;

    @Field(() => location_namesWhereInput, {nullable:true})
    some?: location_namesWhereInput;

    @Field(() => location_namesWhereInput, {nullable:true})
    none?: location_namesWhereInput;
}
