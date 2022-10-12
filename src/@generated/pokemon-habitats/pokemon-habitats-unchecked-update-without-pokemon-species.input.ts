import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_habitat_namesUncheckedUpdateManyWithoutPokemon_habitatsNestedInput } from '../pokemon-habitat-names/pokemon-habitat-names-unchecked-update-many-without-pokemon-habitats-nested.input';

@InputType()
export class pokemon_habitatsUncheckedUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_habitat_namesUncheckedUpdateManyWithoutPokemon_habitatsNestedInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUncheckedUpdateManyWithoutPokemon_habitatsNestedInput;
}
