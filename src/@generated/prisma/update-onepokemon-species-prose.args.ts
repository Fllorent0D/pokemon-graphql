import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseUpdateInput } from '../pokemon-species-prose/pokemon-species-prose-update.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseWhereUniqueInput } from '../pokemon-species-prose/pokemon-species-prose-where-unique.input';

@ArgsType()
export class UpdateOnepokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_species_proseUpdateInput)
    data!: pokemon_species_proseUpdateInput;

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    where!: pokemon_species_proseWhereUniqueInput;
}
