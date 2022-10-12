import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-evolution-chains-nested.input';

@InputType()
export class evolution_chainsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    baby_trigger_item_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutEvolution_chainsNestedInput;
}
