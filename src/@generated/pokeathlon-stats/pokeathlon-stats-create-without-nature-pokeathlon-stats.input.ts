import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-create-nested-many-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-create-nested-many-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput;
}
