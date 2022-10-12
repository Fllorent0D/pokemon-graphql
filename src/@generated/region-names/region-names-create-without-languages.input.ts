import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateNestedOneWithoutRegion_namesInput } from '../regions/regions-create-nested-one-without-region-names.input';

@InputType()
export class region_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => regionsCreateNestedOneWithoutRegion_namesInput, {nullable:false})
    regions!: regionsCreateNestedOneWithoutRegion_namesInput;
}
