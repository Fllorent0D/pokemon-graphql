import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseWhereUniqueInput } from '../pokemon-species-prose/pokemon-species-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateInput } from '../pokemon-species-prose/pokemon-species-prose-create.input';
import { pokemon_species_proseUpdateInput } from '../pokemon-species-prose/pokemon-species-prose-update.input';

@ArgsType()
export class UpsertOnepokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    where!: pokemon_species_proseWhereUniqueInput;

    @Field(() => pokemon_species_proseCreateInput, {nullable:false})
    @Type(() => pokemon_species_proseCreateInput)
    create!: pokemon_species_proseCreateInput;

    @Field(() => pokemon_species_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_species_proseUpdateInput)
    update!: pokemon_species_proseUpdateInput;
}
