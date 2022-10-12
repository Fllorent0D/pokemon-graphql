import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereInput } from '../locations/locations-where.input';

@InputType()
export class LocationsListRelationFilter {

    @Field(() => locationsWhereInput, {nullable:true})
    every?: locationsWhereInput;

    @Field(() => locationsWhereInput, {nullable:true})
    some?: locationsWhereInput;

    @Field(() => locationsWhereInput, {nullable:true})
    none?: locationsWhereInput;
}
