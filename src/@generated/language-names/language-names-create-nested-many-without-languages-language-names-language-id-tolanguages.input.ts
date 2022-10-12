import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput } from './language-names-create-without-languages-language-names-language-id-tolanguages.input';
import { Type } from 'class-transformer';
import { language_namesCreateOrConnectWithoutLanguages_language_names_language_idTolanguagesInput } from './language-names-create-or-connect-without-languages-language-names-language-id-tolanguages.input';
import { language_namesWhereUniqueInput } from './language-names-where-unique.input';

@InputType()
export class language_namesCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput {

    @Field(() => [language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput)
    create?: Array<language_namesCreateWithoutLanguages_language_names_language_idTolanguagesInput>;

    @Field(() => [language_namesCreateOrConnectWithoutLanguages_language_names_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesCreateOrConnectWithoutLanguages_language_names_language_idTolanguagesInput)
    connectOrCreate?: Array<language_namesCreateOrConnectWithoutLanguages_language_names_language_idTolanguagesInput>;

    @Field(() => [language_namesWhereUniqueInput], {nullable:true})
    @Type(() => language_namesWhereUniqueInput)
    connect?: Array<language_namesWhereUniqueInput>;
}
