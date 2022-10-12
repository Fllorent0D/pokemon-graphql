import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;
}
