import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutBerry_firmness_namesInput } from '../languages/languages-create-nested-one-without-berry-firmness-names.input';
import { berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berry-firmness-names.input';

@InputType()
export class berry_firmness_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutBerry_firmness_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput, {nullable:false})
    berry_firmness!: berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput;
}
