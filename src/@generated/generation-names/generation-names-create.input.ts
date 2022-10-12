import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutGeneration_namesInput } from '../languages/languages-create-nested-one-without-generation-names.input';
import { generationsCreateNestedOneWithoutGeneration_namesInput } from '../generations/generations-create-nested-one-without-generation-names.input';

@InputType()
export class generation_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutGeneration_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutGeneration_namesInput;

    @Field(() => generationsCreateNestedOneWithoutGeneration_namesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutGeneration_namesInput;
}
