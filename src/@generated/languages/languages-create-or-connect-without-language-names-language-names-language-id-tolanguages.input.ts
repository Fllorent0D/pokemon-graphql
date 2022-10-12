import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput } from './languages-create-without-language-names-language-names-language-id-tolanguages.input';

@InputType()
export class languagesCreateOrConnectWithoutLanguage_names_language_names_language_idTolanguagesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput, {nullable:false})
    @Type(() => languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput)
    create!: languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput;
}
