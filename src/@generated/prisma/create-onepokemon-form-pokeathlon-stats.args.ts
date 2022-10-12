import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsCreateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsCreateInput)
    data!: pokemon_form_pokeathlon_statsCreateInput;
}
