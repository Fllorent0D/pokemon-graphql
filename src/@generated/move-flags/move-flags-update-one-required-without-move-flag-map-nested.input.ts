import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsCreateWithoutMove_flag_mapInput } from './move-flags-create-without-move-flag-map.input';
import { Type } from 'class-transformer';
import { move_flagsCreateOrConnectWithoutMove_flag_mapInput } from './move-flags-create-or-connect-without-move-flag-map.input';
import { move_flagsUpsertWithoutMove_flag_mapInput } from './move-flags-upsert-without-move-flag-map.input';
import { move_flagsWhereUniqueInput } from './move-flags-where-unique.input';
import { move_flagsUpdateWithoutMove_flag_mapInput } from './move-flags-update-without-move-flag-map.input';

@InputType()
export class move_flagsUpdateOneRequiredWithoutMove_flag_mapNestedInput {

    @Field(() => move_flagsCreateWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsCreateWithoutMove_flag_mapInput)
    create?: move_flagsCreateWithoutMove_flag_mapInput;

    @Field(() => move_flagsCreateOrConnectWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsCreateOrConnectWithoutMove_flag_mapInput)
    connectOrCreate?: move_flagsCreateOrConnectWithoutMove_flag_mapInput;

    @Field(() => move_flagsUpsertWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsUpsertWithoutMove_flag_mapInput)
    upsert?: move_flagsUpsertWithoutMove_flag_mapInput;

    @Field(() => move_flagsWhereUniqueInput, {nullable:true})
    @Type(() => move_flagsWhereUniqueInput)
    connect?: move_flagsWhereUniqueInput;

    @Field(() => move_flagsUpdateWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => move_flagsUpdateWithoutMove_flag_mapInput)
    update?: move_flagsUpdateWithoutMove_flag_mapInput;
}
