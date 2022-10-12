import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutLanguage_names_language_names_local_language_idTolanguagesInput } from '../languages/languages-create-nested-one-without-language-names-language-names-local-language-id-tolanguages.input';

@InputType()
export class language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutLanguage_names_language_names_local_language_idTolanguagesInput, {nullable:false})
    languages_language_names_local_language_idTolanguages!: languagesCreateNestedOneWithoutLanguage_names_language_names_local_language_idTolanguagesInput;
}
