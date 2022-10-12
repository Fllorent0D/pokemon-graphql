import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMove_flag_mapInput } from '../moves/moves-create-nested-one-without-move-flag-map.input';

@InputType()
export class move_flag_mapCreateWithoutMove_flagsInput {

    @Field(() => movesCreateNestedOneWithoutMove_flag_mapInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_flag_mapInput;
}
