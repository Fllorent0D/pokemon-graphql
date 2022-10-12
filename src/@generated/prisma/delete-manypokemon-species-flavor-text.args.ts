import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereInput)
    where?: pokemon_species_flavor_textWhereInput;
}
