import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-create.input';
import { pokemon_species_flavor_textUpdateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update.input';

@ArgsType()
export class UpsertOnepokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => pokemon_species_flavor_textCreateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textCreateInput)
    create!: pokemon_species_flavor_textCreateInput;

    @Field(() => pokemon_species_flavor_textUpdateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateInput)
    update!: pokemon_species_flavor_textUpdateInput;
}
