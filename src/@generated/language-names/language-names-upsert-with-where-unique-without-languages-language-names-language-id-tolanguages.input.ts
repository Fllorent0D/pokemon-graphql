import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesWhereUniqueInput } from './language-names-where-unique.input';
import { Type } from 'class-transformer';
import { language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput } from './language-names-update-without-languages-language-names-language-id-tolanguages.input';
import { language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput } from './language-names-create-without-languages-language-names-language-id-tolanguages.input';

@InputType()
export class language_namesUpsertWithWhereUniqueWithoutLanguages_language_names_language_idTolanguagesInput {

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;

    @Field(() => language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput, {nullable:false})
    @Type(() => language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput)
    update!: language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput;

    @Field(() => language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput, {nullable:false})
    @Type(() => language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput)
    create!: language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput;
}
