import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesWhereUniqueInput } from './language-names-where-unique.input';
import { Type } from 'class-transformer';
import { language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput } from './language-names-update-without-languages-language-names-language-id-tolanguages.input';

@InputType()
export class language_namesUpdateWithWhereUniqueWithoutLanguages_language_names_language_idTolanguagesInput {

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;

    @Field(() => language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput, {nullable:false})
    @Type(() => language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput)
    data!: language_namesUpdateWithoutLanguages_language_names_language_idTolanguagesInput;
}
