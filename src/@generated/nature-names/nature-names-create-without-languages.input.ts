import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateNestedOneWithoutNature_namesInput } from '../natures/natures-create-nested-one-without-nature-names.input';

@InputType()
export class nature_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => naturesCreateNestedOneWithoutNature_namesInput, {nullable:false})
    natures!: naturesCreateNestedOneWithoutNature_namesInput;
}
