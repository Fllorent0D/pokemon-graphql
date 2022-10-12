import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutGeneration_namesInput } from '../generations/generations-create-nested-one-without-generation-names.input';

@InputType()
export class generation_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => generationsCreateNestedOneWithoutGeneration_namesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutGeneration_namesInput;
}
