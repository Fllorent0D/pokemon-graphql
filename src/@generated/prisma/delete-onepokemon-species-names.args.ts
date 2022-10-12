import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from '../pokemon-species-names/pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;
}
