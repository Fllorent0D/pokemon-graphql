import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateOneRequiredWithoutMove_flag_mapNestedInput } from '../moves/moves-update-one-required-without-move-flag-map-nested.input';

@InputType()
export class move_flag_mapUpdateWithoutMove_flagsInput {

    @Field(() => movesUpdateOneRequiredWithoutMove_flag_mapNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_flag_mapNestedInput;
}
