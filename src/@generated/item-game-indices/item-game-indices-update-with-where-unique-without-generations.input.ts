import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { item_game_indicesUpdateWithoutGenerationsInput } from './item-game-indices-update-without-generations.input';

@InputType()
export class item_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;

    @Field(() => item_game_indicesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => item_game_indicesUpdateWithoutGenerationsInput)
    data!: item_game_indicesUpdateWithoutGenerationsInput;
}
