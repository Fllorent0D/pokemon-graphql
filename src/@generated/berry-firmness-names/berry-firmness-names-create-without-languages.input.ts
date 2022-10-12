import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berry-firmness-names.input';

@InputType()
export class berry_firmness_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput, {nullable:false})
    berry_firmness!: berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput;
}
