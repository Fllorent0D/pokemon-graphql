import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsCreateWithoutMove_flag_mapInput } from './move-flags-create-without-move-flag-map.input';
import { Type } from 'class-transformer';
import { move_flagsCreateOrConnectWithoutMove_flag_mapInput } from './move-flags-create-or-connect-without-move-flag-map.input';
import { move_flagsWhereUniqueInput } from './move-flags-where-unique.input';

@InputType()
export class move_flagsCreateNestedOneWithoutMove_flag_mapInput {

    @Field(() => move_flagsCreateWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsCreateWithoutMove_flag_mapInput)
    create?: move_flagsCreateWithoutMove_flag_mapInput;

    @Field(() => move_flagsCreateOrConnectWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsCreateOrConnectWithoutMove_flag_mapInput)
    connectOrCreate?: move_flagsCreateOrConnectWithoutMove_flag_mapInput;

    @Field(() => move_flagsWhereUniqueInput, {nullable:true})
    @Type(() => move_flagsWhereUniqueInput)
    connect?: move_flagsWhereUniqueInput;
}
