import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesItem_idGeneration_idCompoundUniqueInput } from './item-game-indices-item-id-generation-id-compound-unique.input';

@InputType()
export class item_game_indicesWhereUniqueInput {

    @Field(() => item_game_indicesItem_idGeneration_idCompoundUniqueInput, {nullable:true})
    item_id_generation_id?: item_game_indicesItem_idGeneration_idCompoundUniqueInput;
}
