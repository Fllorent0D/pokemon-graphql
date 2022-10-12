import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutLocation_namesInput } from '../languages/languages-create-nested-one-without-location-names.input';

@InputType()
export class location_namesCreateWithoutLocationsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutLocation_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutLocation_namesInput;
}
