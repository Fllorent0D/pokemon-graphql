import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput } from './pokemon-evolution-create-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput } from './pokemon-evolution-create-or-connect-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput {

    @Field(() => [pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput)
    create?: Array<pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;
}
