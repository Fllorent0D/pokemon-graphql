import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutEncounter_method_proseNestedInput } from '../languages/languages-update-one-required-without-encounter-method-prose-nested.input';

@InputType()
export class encounter_method_proseUpdateWithoutEncounter_methodsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutEncounter_method_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutEncounter_method_proseNestedInput;
}
