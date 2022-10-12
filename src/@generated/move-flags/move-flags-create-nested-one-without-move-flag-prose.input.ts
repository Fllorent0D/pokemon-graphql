import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsCreateWithoutMove_flag_proseInput } from './move-flags-create-without-move-flag-prose.input';
import { Type } from 'class-transformer';
import { move_flagsCreateOrConnectWithoutMove_flag_proseInput } from './move-flags-create-or-connect-without-move-flag-prose.input';
import { move_flagsWhereUniqueInput } from './move-flags-where-unique.input';

@InputType()
export class move_flagsCreateNestedOneWithoutMove_flag_proseInput {

    @Field(() => move_flagsCreateWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => move_flagsCreateWithoutMove_flag_proseInput)
    create?: move_flagsCreateWithoutMove_flag_proseInput;

    @Field(() => move_flagsCreateOrConnectWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => move_flagsCreateOrConnectWithoutMove_flag_proseInput)
    connectOrCreate?: move_flagsCreateOrConnectWithoutMove_flag_proseInput;

    @Field(() => move_flagsWhereUniqueInput, {nullable:true})
    @Type(() => move_flagsWhereUniqueInput)
    connect?: move_flagsWhereUniqueInput;
}
