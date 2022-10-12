import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class pokemon_typesUpdateWithoutTypesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput;
}
