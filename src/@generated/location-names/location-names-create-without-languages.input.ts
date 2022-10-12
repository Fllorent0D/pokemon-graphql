import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateNestedOneWithoutLocation_namesInput } from '../locations/locations-create-nested-one-without-location-names.input';

@InputType()
export class location_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => locationsCreateNestedOneWithoutLocation_namesInput, {nullable:false})
    locations!: locationsCreateNestedOneWithoutLocation_namesInput;
}
