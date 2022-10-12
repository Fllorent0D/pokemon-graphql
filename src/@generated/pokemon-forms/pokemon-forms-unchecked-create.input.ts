import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_form_namesUncheckedCreateNestedManyWithoutPokemon_formsInput } from '../pokemon-form-names/pokemon-form-names-unchecked-create-nested-many-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokemon_formsInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-create-nested-many-without-pokemon-forms.input';

@InputType()
export class pokemon_formsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:true})
    introduced_in_version_group_id?: number;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => pokemon_form_namesUncheckedCreateNestedManyWithoutPokemon_formsInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUncheckedCreateNestedManyWithoutPokemon_formsInput;

    @Field(() => pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokemon_formsInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokemon_formsInput;
}
