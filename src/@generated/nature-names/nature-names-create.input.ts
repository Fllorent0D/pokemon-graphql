import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutNature_namesInput } from '../languages/languages-create-nested-one-without-nature-names.input';
import { naturesCreateNestedOneWithoutNature_namesInput } from '../natures/natures-create-nested-one-without-nature-names.input';

@InputType()
export class nature_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutNature_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutNature_namesInput;

    @Field(() => naturesCreateNestedOneWithoutNature_namesInput, {nullable:false})
    natures!: naturesCreateNestedOneWithoutNature_namesInput;
}
