import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';
import { locationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput } from '../locations/locations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class location_game_indicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput;

    @Field(() => locationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput, {nullable:true})
    locations?: locationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput;
}
