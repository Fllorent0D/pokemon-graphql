import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapCreateWithoutMove_flagsInput } from './move-flag-map-create-without-move-flags.input';
import { Type } from 'class-transformer';
import { move_flag_mapCreateOrConnectWithoutMove_flagsInput } from './move-flag-map-create-or-connect-without-move-flags.input';
import { move_flag_mapUpsertWithWhereUniqueWithoutMove_flagsInput } from './move-flag-map-upsert-with-where-unique-without-move-flags.input';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { move_flag_mapUpdateWithWhereUniqueWithoutMove_flagsInput } from './move-flag-map-update-with-where-unique-without-move-flags.input';
import { move_flag_mapUpdateManyWithWhereWithoutMove_flagsInput } from './move-flag-map-update-many-with-where-without-move-flags.input';
import { move_flag_mapScalarWhereInput } from './move-flag-map-scalar-where.input';

@InputType()
export class move_flag_mapUncheckedUpdateManyWithoutMove_flagsNestedInput {

    @Field(() => [move_flag_mapCreateWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapCreateWithoutMove_flagsInput)
    create?: Array<move_flag_mapCreateWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapCreateOrConnectWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapCreateOrConnectWithoutMove_flagsInput)
    connectOrCreate?: Array<move_flag_mapCreateOrConnectWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapUpsertWithWhereUniqueWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapUpsertWithWhereUniqueWithoutMove_flagsInput)
    upsert?: Array<move_flag_mapUpsertWithWhereUniqueWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    set?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    disconnect?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    delete?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    connect?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapUpdateWithWhereUniqueWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapUpdateWithWhereUniqueWithoutMove_flagsInput)
    update?: Array<move_flag_mapUpdateWithWhereUniqueWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapUpdateManyWithWhereWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_mapUpdateManyWithWhereWithoutMove_flagsInput)
    updateMany?: Array<move_flag_mapUpdateManyWithWhereWithoutMove_flagsInput>;

    @Field(() => [move_flag_mapScalarWhereInput], {nullable:true})
    @Type(() => move_flag_mapScalarWhereInput)
    deleteMany?: Array<move_flag_mapScalarWhereInput>;
}
