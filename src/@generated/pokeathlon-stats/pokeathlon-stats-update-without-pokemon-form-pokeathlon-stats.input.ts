import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update-many-without-pokeathlon-stats-nested.input';
import { pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput;
}
