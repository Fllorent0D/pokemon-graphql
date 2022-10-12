import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersCreateWithoutPokemon_speciesInput } from './pokemon-dex-numbers-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-dex-numbers-create-or-connect-without-pokemon-species.input';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';

@InputType()
export class pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_dex_numbersCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_dex_numbersCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    connect?: Array<pokemon_dex_numbersWhereUniqueInput>;
}
