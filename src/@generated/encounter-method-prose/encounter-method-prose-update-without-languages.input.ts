import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_methodsUpdateOneRequiredWithoutEncounter_method_proseNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-method-prose-nested.input';

@InputType()
export class encounter_method_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_methodsUpdateOneRequiredWithoutEncounter_method_proseNestedInput, {nullable:true})
    encounter_methods?: encounter_methodsUpdateOneRequiredWithoutEncounter_method_proseNestedInput;
}
