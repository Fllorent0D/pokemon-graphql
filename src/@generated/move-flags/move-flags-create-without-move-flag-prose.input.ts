import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapCreateNestedManyWithoutMove_flagsInput } from '../move-flag-map/move-flag-map-create-nested-many-without-move-flags.input';

@InputType()
export class move_flagsCreateWithoutMove_flag_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_flag_mapCreateNestedManyWithoutMove_flagsInput, {nullable:true})
    move_flag_map?: move_flag_mapCreateNestedManyWithoutMove_flagsInput;
}
