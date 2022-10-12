import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesScalarWhereInput } from './item-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { item_game_indicesUpdateManyMutationInput } from './item-game-indices-update-many-mutation.input';

@InputType()
export class item_game_indicesUpdateManyWithWhereWithoutGenerationsInput {

    @Field(() => item_game_indicesScalarWhereInput, {nullable:false})
    @Type(() => item_game_indicesScalarWhereInput)
    where!: item_game_indicesScalarWhereInput;

    @Field(() => item_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_game_indicesUpdateManyMutationInput)
    data!: item_game_indicesUpdateManyMutationInput;
}
