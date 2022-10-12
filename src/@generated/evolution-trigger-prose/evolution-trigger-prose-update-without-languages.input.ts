import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput } from '../evolution-triggers/evolution-triggers-update-one-required-without-evolution-trigger-prose-nested.input';

@InputType()
export class evolution_trigger_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput, {nullable:true})
    evolution_triggers?: evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput;
}
