import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-create.input';
import { pokemon_form_pokeathlon_statsUpdateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-update.input';

@ArgsType()
export class UpsertOnepokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsCreateInput)
    create!: pokemon_form_pokeathlon_statsCreateInput;

    @Field(() => pokemon_form_pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsUpdateInput)
    update!: pokemon_form_pokeathlon_statsUpdateInput;
}
