import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class location_game_indicesUpdateWithoutLocationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput;
}
