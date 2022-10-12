import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_abilitiesInput } from './pokemon-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_abilitiesInput } from './pokemon-create-or-connect-without-pokemon-abilities.input';
import { pokemonUpsertWithoutPokemon_abilitiesInput } from './pokemon-upsert-without-pokemon-abilities.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_abilitiesInput } from './pokemon-update-without-pokemon-abilities.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_abilitiesNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_abilitiesInput)
    create?: pokemonCreateWithoutPokemon_abilitiesInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_abilitiesInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_abilitiesInput;

    @Field(() => pokemonUpsertWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_abilitiesInput)
    upsert?: pokemonUpsertWithoutPokemon_abilitiesInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_abilitiesInput)
    update?: pokemonUpdateWithoutPokemon_abilitiesInput;
}
