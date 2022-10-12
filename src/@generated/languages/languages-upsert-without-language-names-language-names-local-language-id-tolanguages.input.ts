import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutLanguage_names_language_names_local_language_idTolanguagesInput } from './languages-update-without-language-names-language-names-local-language-id-tolanguages.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput } from './languages-create-without-language-names-language-names-local-language-id-tolanguages.input';

@InputType()
export class languagesUpsertWithoutLanguage_names_language_names_local_language_idTolanguagesInput {

    @Field(() => languagesUpdateWithoutLanguage_names_language_names_local_language_idTolanguagesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutLanguage_names_language_names_local_language_idTolanguagesInput)
    update!: languagesUpdateWithoutLanguage_names_language_names_local_language_idTolanguagesInput;

    @Field(() => languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput, {nullable:false})
    @Type(() => languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput)
    create!: languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput;
}
