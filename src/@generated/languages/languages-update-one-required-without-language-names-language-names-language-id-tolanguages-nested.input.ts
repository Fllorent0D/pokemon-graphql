import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput } from './languages-create-without-language-names-language-names-language-id-tolanguages.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutLanguage_names_language_names_language_idTolanguagesInput } from './languages-create-or-connect-without-language-names-language-names-language-id-tolanguages.input';
import { languagesUpsertWithoutLanguage_names_language_names_language_idTolanguagesInput } from './languages-upsert-without-language-names-language-names-language-id-tolanguages.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutLanguage_names_language_names_language_idTolanguagesInput } from './languages-update-without-language-names-language-names-language-id-tolanguages.input';

@InputType()
export class languagesUpdateOneRequiredWithoutLanguage_names_language_names_language_idTolanguagesNestedInput {

    @Field(() => languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput)
    create?: languagesCreateWithoutLanguage_names_language_names_language_idTolanguagesInput;

    @Field(() => languagesCreateOrConnectWithoutLanguage_names_language_names_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutLanguage_names_language_names_language_idTolanguagesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutLanguage_names_language_names_language_idTolanguagesInput;

    @Field(() => languagesUpsertWithoutLanguage_names_language_names_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutLanguage_names_language_names_language_idTolanguagesInput)
    upsert?: languagesUpsertWithoutLanguage_names_language_names_language_idTolanguagesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutLanguage_names_language_names_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutLanguage_names_language_names_language_idTolanguagesInput)
    update?: languagesUpdateWithoutLanguage_names_language_names_language_idTolanguagesInput;
}
