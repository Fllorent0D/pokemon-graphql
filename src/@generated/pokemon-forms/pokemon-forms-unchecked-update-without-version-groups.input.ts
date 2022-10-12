import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { pokemon_form_namesUncheckedUpdateManyWithoutPokemon_formsNestedInput } from '../pokemon-form-names/pokemon-form-names-unchecked-update-many-without-pokemon-forms-nested.input';
import { pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokemon_formsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-update-many-without-pokemon-forms-nested.input';

@InputType()
export class pokemon_formsUncheckedUpdateWithoutVersion_groupsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokemon_id?: IntFieldUpdateOperationsInput;

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
