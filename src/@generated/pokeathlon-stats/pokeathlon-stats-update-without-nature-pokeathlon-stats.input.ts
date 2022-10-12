import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update-many-without-pokeathlon-stats-nested.input';
import { pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUpdateWithoutNature_pokeathlon_statsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput;
}
