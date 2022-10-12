import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textUpdateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textWhereUniqueInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where-unique.input';

@ArgsType()
export class UpdateOnepokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textUpdateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateInput)
    data!: pokemon_species_flavor_textUpdateInput;

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;
}
