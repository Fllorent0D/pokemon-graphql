import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseUpdateWithoutPokemon_speciesInput } from './pokemon-species-prose-update-without-pokemon-species.input';
import { pokemon_species_proseCreateWithoutPokemon_speciesInput } from './pokemon-species-prose-create-without-pokemon-species.input';

@InputType()
export class pokemon_species_proseUpsertWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    where!: pokemon_species_proseWhereUniqueInput;

    @Field(() => pokemon_species_proseUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_proseUpdateWithoutPokemon_speciesInput)
    update!: pokemon_species_proseUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_proseCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_proseCreateWithoutPokemon_speciesInput)
    create!: pokemon_species_proseCreateWithoutPokemon_speciesInput;
}
