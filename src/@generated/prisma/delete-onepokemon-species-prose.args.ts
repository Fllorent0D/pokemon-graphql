import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseWhereUniqueInput } from '../pokemon-species-prose/pokemon-species-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    where!: pokemon_species_proseWhereUniqueInput;
}
