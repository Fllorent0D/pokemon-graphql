import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-update-many-without-pokeathlon-stats-nested.input';
import { pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUncheckedUpdateWithoutNature_pokeathlon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;
}
