import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutType_namesInput } from '../languages/languages-create-nested-one-without-type-names.input';

@InputType()
export class type_namesCreateWithoutTypesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutType_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutType_namesInput;
}
