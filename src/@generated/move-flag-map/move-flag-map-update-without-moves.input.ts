import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput } from '../move-flags/move-flags-update-one-required-without-move-flag-map-nested.input';

@InputType()
export class move_flag_mapUpdateWithoutMovesInput {

    @Field(() => move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput, {nullable:true})
    move_flags?: move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput;
}
