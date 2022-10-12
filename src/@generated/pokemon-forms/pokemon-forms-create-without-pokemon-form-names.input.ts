import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutPokemon_formsInput } from '../version-groups/version-groups-create-nested-one-without-pokemon-forms.input';
import { pokemonCreateNestedOneWithoutPokemon_formsInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokemon_formsInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-create-nested-many-without-pokemon-forms.input';

@InputType()
export class pokemon_formsCreateWithoutPokemon_form_namesInput {

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => version_groupsCreateNestedOneWithoutPokemon_formsInput, {nullable:true})
    version_groups?: version_groupsCreateNestedOneWithoutPokemon_formsInput;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_formsInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_formsInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokemon_formsInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokemon_formsInput;
}
