import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_abilitiesInput } from './pokemon-create-without-pokemon-abilities.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_abilitiesInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_abilitiesInput)
    create!: pokemonCreateWithoutPokemon_abilitiesInput;
}
