import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { abilitiesUpdateOneRequiredWithoutPokemon_abilitiesNestedInput } from '../abilities/abilities-update-one-required-without-pokemon-abilities-nested.input';

@InputType()
export class pokemon_abilitiesUpdateWithoutPokemonInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_dream?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutPokemon_abilitiesNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutPokemon_abilitiesNestedInput;
}
