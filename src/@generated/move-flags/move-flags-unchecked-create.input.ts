import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_flag_mapUncheckedCreateNestedManyWithoutMove_flagsInput } from '../move-flag-map/move-flag-map-unchecked-create-nested-many-without-move-flags.input';
import { move_flag_proseUncheckedCreateNestedManyWithoutMove_flagsInput } from '../move-flag-prose/move-flag-prose-unchecked-create-nested-many-without-move-flags.input';

@InputType()
export class move_flagsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_flag_mapUncheckedCreateNestedManyWithoutMove_flagsInput, {nullable:true})
    move_flag_map?: move_flag_mapUncheckedCreateNestedManyWithoutMove_flagsInput;

    @Field(() => move_flag_proseUncheckedCreateNestedManyWithoutMove_flagsInput, {nullable:true})
    move_flag_prose?: move_flag_proseUncheckedCreateNestedManyWithoutMove_flagsInput;
}
