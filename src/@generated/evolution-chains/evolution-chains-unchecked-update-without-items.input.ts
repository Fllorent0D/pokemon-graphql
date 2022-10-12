import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-evolution-chains-nested.input';

@InputType()
export class evolution_chainsUncheckedUpdateWithoutItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput;
}
