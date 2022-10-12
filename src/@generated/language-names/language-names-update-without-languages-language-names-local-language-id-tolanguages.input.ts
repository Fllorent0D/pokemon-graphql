import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutLanguage_names_language_names_language_idTolanguagesNestedInput } from '../languages/languages-update-one-required-without-language-names-language-names-language-id-tolanguages-nested.input';

@InputType()
export class language_namesUpdateWithoutLanguages_language_names_local_language_idTolanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutLanguage_names_language_names_language_idTolanguagesNestedInput, {nullable:true})
    languages_language_names_language_idTolanguages?: languagesUpdateOneRequiredWithoutLanguage_names_language_names_language_idTolanguagesNestedInput;
}
