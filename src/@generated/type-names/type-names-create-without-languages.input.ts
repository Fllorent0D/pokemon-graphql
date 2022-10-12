import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutType_namesInput } from '../types/types-create-nested-one-without-type-names.input';

@InputType()
export class type_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => typesCreateNestedOneWithoutType_namesInput, {nullable:false})
    types!: typesCreateNestedOneWithoutType_namesInput;
}
