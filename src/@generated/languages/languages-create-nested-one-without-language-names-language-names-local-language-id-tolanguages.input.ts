import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput } from './languages-create-without-language-names-language-names-local-language-id-tolanguages.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutLanguage_names_language_names_local_language_idTolanguagesInput } from './languages-create-or-connect-without-language-names-language-names-local-language-id-tolanguages.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutLanguage_names_language_names_local_language_idTolanguagesInput {

    @Field(() => languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput)
    create?: languagesCreateWithoutLanguage_names_language_names_local_language_idTolanguagesInput;

    @Field(() => languagesCreateOrConnectWithoutLanguage_names_language_names_local_language_idTolanguagesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutLanguage_names_language_names_local_language_idTolanguagesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutLanguage_names_language_names_local_language_idTolanguagesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
