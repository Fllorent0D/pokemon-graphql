import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutLocation_area_proseInput } from '../languages/languages-create-nested-one-without-location-area-prose.input';

@InputType()
export class location_area_proseCreateWithoutLocation_areasInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutLocation_area_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutLocation_area_proseInput;
}
