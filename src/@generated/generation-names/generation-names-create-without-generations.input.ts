import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutGeneration_namesInput } from '../languages/languages-create-nested-one-without-generation-names.input';

@InputType()
export class generation_namesCreateWithoutGenerationsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutGeneration_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutGeneration_namesInput;
}
