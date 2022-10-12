import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { typesUpdateOneRequiredWithoutPokemon_typesNestedInput } from '../types/types-update-one-required-without-pokemon-types-nested.input';
import { pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class pokemon_typesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => typesUpdateOneRequiredWithoutPokemon_typesNestedInput, {nullable:true})
    types?: typesUpdateOneRequiredWithoutPokemon_typesNestedInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput;
}
