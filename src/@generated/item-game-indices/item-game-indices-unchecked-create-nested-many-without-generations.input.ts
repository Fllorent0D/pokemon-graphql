import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesCreateWithoutGenerationsInput } from './item-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { item_game_indicesCreateOrConnectWithoutGenerationsInput } from './item-game-indices-create-or-connect-without-generations.input';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@InputType()
export class item_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput {

    @Field(() => [item_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesCreateWithoutGenerationsInput)
    create?: Array<item_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [item_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<item_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    connect?: Array<item_game_indicesWhereUniqueInput>;
}
