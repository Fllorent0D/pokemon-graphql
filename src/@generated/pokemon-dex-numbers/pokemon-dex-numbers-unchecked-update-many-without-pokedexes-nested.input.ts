import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersCreateWithoutPokedexesInput } from './pokemon-dex-numbers-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput } from './pokemon-dex-numbers-create-or-connect-without-pokedexes.input';
import { pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokedexesInput } from './pokemon-dex-numbers-upsert-with-where-unique-without-pokedexes.input';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokedexesInput } from './pokemon-dex-numbers-update-with-where-unique-without-pokedexes.input';
import { pokemon_dex_numbersUpdateManyWithWhereWithoutPokedexesInput } from './pokemon-dex-numbers-update-many-with-where-without-pokedexes.input';
import { pokemon_dex_numbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';

@InputType()
export class pokemon_dex_numbersUncheckedUpdateManyWithoutPokedexesNestedInput {

    @Field(() => [pokemon_dex_numbersCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateWithoutPokedexesInput)
    create?: Array<pokemon_dex_numbersCreateWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokedexesInput)
    upsert?: Array<pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    set?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    disconnect?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    delete?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    connect?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokedexesInput)
    update?: Array<pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersUpdateManyWithWhereWithoutPokedexesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpdateManyWithWhereWithoutPokedexesInput)
    updateMany?: Array<pokemon_dex_numbersUpdateManyWithWhereWithoutPokedexesInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereInput], {nullable:true})
    @Type(() => pokemon_dex_numbersScalarWhereInput)
    deleteMany?: Array<pokemon_dex_numbersScalarWhereInput>;
}
