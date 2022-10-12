import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokeathlon_statsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput } from '../pokeathlon-stats/pokeathlon-stats-update-one-required-without-pokemon-form-pokeathlon-stats-nested.input';
import { pokemon_formsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-pokemon-form-pokeathlon-stats-nested.input';

@InputType()
export class pokemon_form_pokeathlon_statsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimum_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximum_stat?: IntFieldUpdateOperationsInput;

    @Field(() => pokeathlon_statsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput;

    @Field(() => pokemon_formsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput, {nullable:true})
    pokemon_forms?: pokemon_formsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput;
}
