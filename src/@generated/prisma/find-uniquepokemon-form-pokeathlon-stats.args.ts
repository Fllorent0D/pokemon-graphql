import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;
}
