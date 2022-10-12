import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseWhereInput } from '../pokemon-species-prose/pokemon-species-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    @Type(() => pokemon_species_proseWhereInput)
    where?: pokemon_species_proseWhereInput;
}
