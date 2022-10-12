import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput } from '../languages/languages-update-one-required-without-evolution-trigger-prose-nested.input';
import { evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput } from '../evolution-triggers/evolution-triggers-update-one-required-without-evolution-trigger-prose-nested.input';

@InputType()
export class evolution_trigger_proseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput;

    @Field(() => evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput, {nullable:true})
    evolution_triggers?: evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput;
}
