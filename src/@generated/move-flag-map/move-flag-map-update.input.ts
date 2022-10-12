import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput } from '../move-flags/move-flags-update-one-required-without-move-flag-map-nested.input';
import { movesUpdateOneRequiredWithoutMove_flag_mapNestedInput } from '../moves/moves-update-one-required-without-move-flag-map-nested.input';

@InputType()
export class move_flag_mapUpdateInput {

    @Field(() => move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput, {nullable:true})
    move_flags?: move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_flag_mapNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_flag_mapNestedInput;
}
