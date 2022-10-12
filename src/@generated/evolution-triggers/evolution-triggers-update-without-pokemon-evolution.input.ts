import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-update-many-without-evolution-triggers-nested.input';

@InputType()
export class evolution_triggersUpdateWithoutPokemon_evolutionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput;
}
