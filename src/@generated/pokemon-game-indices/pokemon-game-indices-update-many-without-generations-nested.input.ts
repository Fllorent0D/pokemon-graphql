import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesCreateWithoutGenerationsInput } from './pokemon-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateOrConnectWithoutGenerationsInput } from './pokemon-game-indices-create-or-connect-without-generations.input';
import { pokemon_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput } from './pokemon-game-indices-upsert-with-where-unique-without-generations.input';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { pokemon_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput } from './pokemon-game-indices-update-with-where-unique-without-generations.input';
import { pokemon_game_indicesUpdateManyWithWhereWithoutGenerationsInput } from './pokemon-game-indices-update-many-with-where-without-generations.input';
import { pokemon_game_indicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';

@InputType()
export class pokemon_game_indicesUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [pokemon_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateWithoutGenerationsInput)
    create?: Array<pokemon_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<pokemon_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<pokemon_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    set?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    disconnect?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    delete?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    connect?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<pokemon_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<pokemon_game_indicesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_game_indicesScalarWhereInput)
    deleteMany?: Array<pokemon_game_indicesScalarWhereInput>;
}
