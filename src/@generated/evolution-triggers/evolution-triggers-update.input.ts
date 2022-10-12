import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-update-many-without-evolution-triggers-nested.input';
import { pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolution-triggers-nested.input';

@InputType()
export class evolution_triggersUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput;
}
