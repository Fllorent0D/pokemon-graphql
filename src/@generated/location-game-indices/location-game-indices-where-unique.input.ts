import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesLocation_idGeneration_idGame_indexCompoundUniqueInput } from './location-game-indices-location-id-generation-id-game-index-compound-unique.input';

@InputType()
export class location_game_indicesWhereUniqueInput {

    @Field(() => location_game_indicesLocation_idGeneration_idGame_indexCompoundUniqueInput, {nullable:true})
    location_id_generation_id_game_index?: location_game_indicesLocation_idGeneration_idGame_indexCompoundUniqueInput;
}
