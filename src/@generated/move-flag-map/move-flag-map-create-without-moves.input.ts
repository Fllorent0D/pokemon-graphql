import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsCreateNestedOneWithoutMove_flag_mapInput } from '../move-flags/move-flags-create-nested-one-without-move-flag-map.input';

@InputType()
export class move_flag_mapCreateWithoutMovesInput {

    @Field(() => move_flagsCreateNestedOneWithoutMove_flag_mapInput, {nullable:false})
    move_flags!: move_flagsCreateNestedOneWithoutMove_flag_mapInput;
}
