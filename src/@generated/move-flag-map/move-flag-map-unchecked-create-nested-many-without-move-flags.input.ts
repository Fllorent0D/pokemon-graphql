import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapCreateWithoutMove_flagsInput } from './move-flag-map-create-without-move-flags.input';
import { Type } from 'class-transformer';
import { move_flag_mapCreateOrConnectWithoutMove_flagsInput } from './move-flag-map-create-or-connect-without-move-flags.input';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';

@InputType()
export class move_flag_mapUncheckedCreateNestedManyWithoutMove_flagsInput {

    @Field(() => [move_flag_mapCreateWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapCreateWithoutMove_flagsInput)
    create?: Array<move_flag_mapCreateWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapCreateOrConnectWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapCreateOrConnectWithoutMove_flagsInput)
    connectOrCreate?: Array<move_flag_mapCreateOrConnectWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    connect?: Array<move_flag_mapWhereUniqueInput>;
}
