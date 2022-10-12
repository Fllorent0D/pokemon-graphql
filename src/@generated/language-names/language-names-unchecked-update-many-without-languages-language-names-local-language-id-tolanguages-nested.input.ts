import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-create-without-languages-language-names-local-language-id-tolanguages.input';
import { Type } from 'class-transformer';
import { language_namesCreateOrConnectWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-create-or-connect-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesUpsertWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-upsert-with-where-unique-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesWhereUniqueInput } from './language-names-where-unique.input';
import { language_namesUpdateWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-update-with-where-unique-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesUpdateManyWithWhereWithoutLanguages_language_names_local_language_idTolanguagesInput } from './language-names-update-many-with-where-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesScalarWhereInput } from './language-names-scalar-where.input';

@InputType()
export class language_namesUncheckedUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput {

    @Field(() => [language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput)
    create?: Array<language_namesCreateWithoutLanguages_language_names_local_language_idTolanguagesInput>;

    @Field(() => [language_namesCreateOrConnectWithoutLanguages_language_names_local_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesCreateOrConnectWithoutLanguages_language_names_local_language_idTolanguagesInput)
    connectOrCreate?: Array<language_namesCreateOrConnectWithoutLanguages_language_names_local_language_idTolanguagesInput>;

    @Field(() => [language_namesUpsertWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesUpsertWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput)
    upsert?: Array<language_namesUpsertWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput>;

    @Field(() => [language_namesWhereUniqueInput], {nullable:true})
    @Type(() => language_namesWhereUniqueInput)
    set?: Array<language_namesWhereUniqueInput>;

    @Field(() => [language_namesWhereUniqueInput], {nullable:true})
    @Type(() => language_namesWhereUniqueInput)
    disconnect?: Array<language_namesWhereUniqueInput>;

    @Field(() => [language_namesWhereUniqueInput], {nullable:true})
    @Type(() => language_namesWhereUniqueInput)
    delete?: Array<language_namesWhereUniqueInput>;

    @Field(() => [language_namesWhereUniqueInput], {nullable:true})
    @Type(() => language_namesWhereUniqueInput)
    connect?: Array<language_namesWhereUniqueInput>;

    @Field(() => [language_namesUpdateWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesUpdateWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput)
    update?: Array<language_namesUpdateWithWhereUniqueWithoutLanguages_language_names_local_language_idTolanguagesInput>;

    @Field(() => [language_namesUpdateManyWithWhereWithoutLanguages_language_names_local_language_idTolanguagesInput], {nullable:true})
    @Type(() => language_namesUpdateManyWithWhereWithoutLanguages_language_names_local_language_idTolanguagesInput)
    updateMany?: Array<language_namesUpdateManyWithWhereWithoutLanguages_language_names_local_language_idTolanguagesInput>;

    @Field(() => [language_namesScalarWhereInput], {nullable:true})
    @Type(() => language_namesScalarWhereInput)
    deleteMany?: Array<language_namesScalarWhereInput>;
}
