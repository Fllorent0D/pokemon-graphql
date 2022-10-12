import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersCreateWithoutPokedexesInput } from './pokemon-dex-numbers-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput } from './pokemon-dex-numbers-create-or-connect-without-pokedexes.input';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';

@InputType()
export class pokemon_dex_numbersCreateNestedManyWithoutPokedexesInput {

    @Field(() => [pokemon_dex_numbersCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateWithoutPokedexesInput)
    create?: Array<pokemon_dex_numbersCreateWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    connect?: Array<pokemon_dex_numbersWhereUniqueInput>;
}
