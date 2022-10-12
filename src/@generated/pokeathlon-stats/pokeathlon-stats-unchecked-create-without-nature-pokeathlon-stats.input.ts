import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-create-nested-many-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-create-nested-many-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsUncheckedCreateWithoutNature_pokeathlon_statsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput;

    @Field(() => pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput;
}
