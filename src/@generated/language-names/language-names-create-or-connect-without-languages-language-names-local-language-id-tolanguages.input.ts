import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesWhereUniqueInput } from './language-names-where-unique.input';
import { Type } from 'class-transformer';
import { language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-create-without-languages-language-names-local-language-id-tolanguages.input';

@InputType()
export class language_namesCreateOrConnectWithoutLanguages_language_names_local_language_idTolanguagesInput {

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;

    @Field(() => language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput, {nullable:false})
    @Type(() => language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput)
    create!: language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput;
}
