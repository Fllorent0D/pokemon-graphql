import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolution-triggers-nested.input';

@InputType()
export class evolution_triggersUpdateWithoutEvolution_trigger_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUpdateManyWithoutEvolution_triggersNestedInput;
}
