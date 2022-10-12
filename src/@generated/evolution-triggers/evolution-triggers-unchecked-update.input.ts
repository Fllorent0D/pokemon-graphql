import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-unchecked-update-many-without-evolution-triggers-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutEvolution_triggersNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-evolution-triggers-nested.input';

@InputType()
export class evolution_triggersUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUncheckedUpdateManyWithoutEvolution_triggersNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedUpdateManyWithoutEvolution_triggersNestedInput;
}
