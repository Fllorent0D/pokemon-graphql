import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textUpdateManyMutationInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textWhereInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where.input';

@ArgsType()
export class UpdateManypokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateManyMutationInput)
    data!: pokemon_species_flavor_textUpdateManyMutationInput;

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereInput)
    where?: pokemon_species_flavor_textWhereInput;
}
