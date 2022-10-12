import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput } from './pokemon-species-create-without-pokemon-evolution-pokemon-evolution-trade-species-id-topokemon-species.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput)
    create!: pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput;
}
