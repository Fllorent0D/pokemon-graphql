import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsUpdateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-update.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where-unique.input';

@ArgsType()
export class UpdateOnepokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsUpdateInput)
    data!: pokemon_form_pokeathlon_statsUpdateInput;

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;
}
