import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from '../pokemon-species-names/pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateInput } from '../pokemon-species-names/pokemon-species-names-create.input';
import { pokemon_species_namesUpdateInput } from '../pokemon-species-names/pokemon-species-names-update.input';

@ArgsType()
export class UpsertOnepokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;

    @Field(() => pokemon_species_namesCreateInput, {nullable:false})
    @Type(() => pokemon_species_namesCreateInput)
    create!: pokemon_species_namesCreateInput;

    @Field(() => pokemon_species_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateInput)
    update!: pokemon_species_namesUpdateInput;
}
