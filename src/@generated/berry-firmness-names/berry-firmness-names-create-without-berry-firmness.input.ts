import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutBerry_firmness_namesInput } from '../languages/languages-create-nested-one-without-berry-firmness-names.input';

@InputType()
export class berry_firmness_namesCreateWithoutBerry_firmnessInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutBerry_firmness_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutBerry_firmness_namesInput;
}
