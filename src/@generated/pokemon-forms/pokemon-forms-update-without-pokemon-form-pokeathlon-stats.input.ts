import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { version_groupsUpdateOneWithoutPokemon_formsNestedInput } from '../version-groups/version-groups-update-one-without-pokemon-forms-nested.input';
import { pokemonUpdateOneRequiredWithoutPokemon_formsNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-forms-nested.input';
import { pokemon_form_namesUpdateManyWithoutPokemon_formsNestedInput } from '../pokemon-form-names/pokemon-form-names-update-many-without-pokemon-forms-nested.input';

@InputType()
export class pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_default?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => version_groupsUpdateOneWithoutPokemon_formsNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneWithoutPokemon_formsNestedInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_formsNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_formsNestedInput;

    @Field(() => pokemon_form_namesUpdateManyWithoutPokemon_formsNestedInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUpdateManyWithoutPokemon_formsNestedInput;
}
