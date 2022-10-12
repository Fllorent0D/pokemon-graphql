import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereInput } from '../locations/locations-where.input';

@InputType()
export class LocationsRelationFilter {

    @Field(() => locationsWhereInput, {nullable:true})
    is?: locationsWhereInput;

    @Field(() => locationsWhereInput, {nullable:true})
    isNot?: locationsWhereInput;
}
