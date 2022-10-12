import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-unchecked-update-many-without-evolution-triggers-nested.input';

@InputType()
export class evolution_triggersUncheckedUpdateWithoutPokemon_evolutionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput;
}
