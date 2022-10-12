import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesCreateWithoutItemsInput } from './item-game-indices-create-without-items.input';
import { Type } from 'class-transformer';
import { item_game_indicesCreateOrConnectWithoutItemsInput } from './item-game-indices-create-or-connect-without-items.input';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@InputType()
export class item_game_indicesUncheckedCreateNestedManyWithoutItemsInput {

    @Field(() => [item_game_indicesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesCreateWithoutItemsInput)
    create?: Array<item_game_indicesCreateWithoutItemsInput>;

    @Field(() => [item_game_indicesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_game_indicesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    connect?: Array<item_game_indicesWhereUniqueInput>;
}
