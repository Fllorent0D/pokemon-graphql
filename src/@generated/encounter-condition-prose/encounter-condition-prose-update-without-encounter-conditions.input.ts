import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutEncounter_condition_proseNestedInput } from '../languages/languages-update-one-required-without-encounter-condition-prose-nested.input';

@InputType()
export class encounter_condition_proseUpdateWithoutEncounter_conditionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutEncounter_condition_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutEncounter_condition_proseNestedInput;
}
