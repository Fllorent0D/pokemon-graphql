import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutRegion_namesInput } from '../languages/languages-create-nested-one-without-region-names.input';

@InputType()
export class region_namesCreateWithoutRegionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutRegion_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutRegion_namesInput;
}
