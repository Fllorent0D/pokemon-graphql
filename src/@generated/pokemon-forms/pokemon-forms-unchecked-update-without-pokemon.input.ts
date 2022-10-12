import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { pokemon_form_namesUncheckedUpdateManyWithoutPokemon_formsNestedInput } from '../pokemon-form-names/pokemon-form-names-unchecked-update-many-without-pokemon-forms-nested.input';
import { pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokemon_formsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-update-many-without-pokemon-forms-nested.input';

@InputType()
export class pokemon_formsUncheckedUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    introduced_in_version_group_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_default?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => pokemon_form_namesUncheckedUpdateManyWithoutPokemon_formsNestedInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUncheckedUpdateManyWithoutPokemon_formsNestedInput;

    @Field(() => pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokemon_formsNestedInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokemon_formsNestedInput;
}
