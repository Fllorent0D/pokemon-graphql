import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_speciesInput } from './pokemon-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-create-or-connect-without-pokemon-species.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonUncheckedCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemonCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_speciesInput)
    create?: Array<pokemonCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemonCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemonCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemonWhereUniqueInput], {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: Array<pokemonWhereUniqueInput>;
}
