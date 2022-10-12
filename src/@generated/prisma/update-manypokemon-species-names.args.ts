import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesUpdateManyMutationInput } from '../pokemon-species-names/pokemon-species-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesWhereInput } from '../pokemon-species-names/pokemon-species-names-where.input';

@ArgsType()
export class UpdateManypokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateManyMutationInput)
    data!: pokemon_species_namesUpdateManyMutationInput;

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    @Type(() => pokemon_species_namesWhereInput)
    where?: pokemon_species_namesWhereInput;
}
