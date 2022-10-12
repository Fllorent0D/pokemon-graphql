import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsUpdateManyMutationInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsWhereInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where.input';

@ArgsType()
export class UpdateManypokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsUpdateManyMutationInput)
    data!: pokemon_form_pokeathlon_statsUpdateManyMutationInput;

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereInput)
    where?: pokemon_form_pokeathlon_statsWhereInput;
}
