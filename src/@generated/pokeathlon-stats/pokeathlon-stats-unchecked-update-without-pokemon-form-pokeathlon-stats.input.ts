import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-unchecked-update-many-without-pokeathlon-stats-nested.input';
import { pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUncheckedUpdateWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;
}
