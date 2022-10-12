import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseCreateWithoutMove_flagsInput } from './move-flag-prose-create-without-move-flags.input';
import { Type } from 'class-transformer';
import { move_flag_proseCreateOrConnectWithoutMove_flagsInput } from './move-flag-prose-create-or-connect-without-move-flags.input';
import { move_flag_proseUpsertWithWhereUniqueWithoutMove_flagsInput } from './move-flag-prose-upsert-with-where-unique-without-move-flags.input';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';
import { move_flag_proseUpdateWithWhereUniqueWithoutMove_flagsInput } from './move-flag-prose-update-with-where-unique-without-move-flags.input';
import { move_flag_proseUpdateManyWithWhereWithoutMove_flagsInput } from './move-flag-prose-update-many-with-where-without-move-flags.input';
import { move_flag_proseScalarWhereInput } from './move-flag-prose-scalar-where.input';

@InputType()
export class move_flag_proseUpdateManyWithoutMove_flagsNestedInput {

    @Field(() => [move_flag_proseCreateWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseCreateWithoutMove_flagsInput)
    create?: Array<move_flag_proseCreateWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseCreateOrConnectWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseCreateOrConnectWithoutMove_flagsInput)
    connectOrCreate?: Array<move_flag_proseCreateOrConnectWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseUpsertWithWhereUniqueWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseUpsertWithWhereUniqueWithoutMove_flagsInput)
    upsert?: Array<move_flag_proseUpsertWithWhereUniqueWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    set?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    disconnect?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    delete?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    connect?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseUpdateWithWhereUniqueWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseUpdateWithWhereUniqueWithoutMove_flagsInput)
    update?: Array<move_flag_proseUpdateWithWhereUniqueWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseUpdateManyWithWhereWithoutMove_flagsInput], {nullable:true})
    @Type(() => move_flag_proseUpdateManyWithWhereWithoutMove_flagsInput)
    updateMany?: Array<move_flag_proseUpdateManyWithWhereWithoutMove_flagsInput>;

    @Field(() => [move_flag_proseScalarWhereInput], {nullable:true})
    @Type(() => move_flag_proseScalarWhereInput)
    deleteMany?: Array<move_flag_proseScalarWhereInput>;
}
