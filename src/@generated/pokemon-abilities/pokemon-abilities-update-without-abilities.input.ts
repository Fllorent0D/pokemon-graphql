import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemonUpdateOneRequiredWithoutPokemon_abilitiesNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-abilities-nested.input';

@InputType()
export class pokemon_abilitiesUpdateWithoutAbilitiesInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_dream?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_abilitiesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_abilitiesNestedInput;
}
