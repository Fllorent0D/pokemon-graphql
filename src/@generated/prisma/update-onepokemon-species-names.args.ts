import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesUpdateInput } from '../pokemon-species-names/pokemon-species-names-update.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesWhereUniqueInput } from '../pokemon-species-names/pokemon-species-names-where-unique.input';

@ArgsType()
export class UpdateOnepokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateInput)
    data!: pokemon_species_namesUpdateInput;

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;
}
