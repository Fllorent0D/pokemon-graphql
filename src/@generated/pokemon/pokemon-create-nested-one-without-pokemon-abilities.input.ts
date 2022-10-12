import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_abilitiesInput } from './pokemon-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_abilitiesInput } from './pokemon-create-or-connect-without-pokemon-abilities.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutPokemon_abilitiesInput {

    @Field(() => pokemonCreateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_abilitiesInput)
    create?: pokemonCreateWithoutPokemon_abilitiesInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_abilitiesInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_abilitiesInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}
