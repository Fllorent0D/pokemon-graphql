import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereInput)
    where?: pokemon_form_pokeathlon_statsWhereInput;
}
