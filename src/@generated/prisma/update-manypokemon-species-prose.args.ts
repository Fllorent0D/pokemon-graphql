import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseUpdateManyMutationInput } from '../pokemon-species-prose/pokemon-species-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseWhereInput } from '../pokemon-species-prose/pokemon-species-prose-where.input';

@ArgsType()
export class UpdateManypokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_proseUpdateManyMutationInput)
    data!: pokemon_species_proseUpdateManyMutationInput;

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    @Type(() => pokemon_species_proseWhereInput)
    where?: pokemon_species_proseWhereInput;
}
