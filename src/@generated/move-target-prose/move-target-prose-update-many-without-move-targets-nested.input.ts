import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateWithoutMove_targetsInput } from './move-target-prose-create-without-move-targets.input';
import { Type } from 'class-transformer';
import { move_target_proseCreateOrConnectWithoutMove_targetsInput } from './move-target-prose-create-or-connect-without-move-targets.input';
import { move_target_proseUpsertWithWhereUniqueWithoutMove_targetsInput } from './move-target-prose-upsert-with-where-unique-without-move-targets.input';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';
import { move_target_proseUpdateWithWhereUniqueWithoutMove_targetsInput } from './move-target-prose-update-with-where-unique-without-move-targets.input';
import { move_target_proseUpdateManyWithWhereWithoutMove_targetsInput } from './move-target-prose-update-many-with-where-without-move-targets.input';
import { move_target_proseScalarWhereInput } from './move-target-prose-scalar-where.input';

@InputType()
export class move_target_proseUpdateManyWithoutMove_targetsNestedInput {

    @Field(() => [move_target_proseCreateWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseCreateWithoutMove_targetsInput)
    create?: Array<move_target_proseCreateWithoutMove_targetsInput>;

    @Field(() => [move_target_proseCreateOrConnectWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseCreateOrConnectWithoutMove_targetsInput)
    connectOrCreate?: Array<move_target_proseCreateOrConnectWithoutMove_targetsInput>;

    @Field(() => [move_target_proseUpsertWithWhereUniqueWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseUpsertWithWhereUniqueWithoutMove_targetsInput)
    upsert?: Array<move_target_proseUpsertWithWhereUniqueWithoutMove_targetsInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    set?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    disconnect?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    delete?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    connect?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseUpdateWithWhereUniqueWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseUpdateWithWhereUniqueWithoutMove_targetsInput)
    update?: Array<move_target_proseUpdateWithWhereUniqueWithoutMove_targetsInput>;

    @Field(() => [move_target_proseUpdateManyWithWhereWithoutMove_targetsInput], {nullable:true})
    @Type(() => move_target_proseUpdateManyWithWhereWithoutMove_targetsInput)
    updateMany?: Array<move_target_proseUpdateManyWithWhereWithoutMove_targetsInput>;

    @Field(() => [move_target_proseScalarWhereInput], {nullable:true})
    @Type(() => move_target_proseScalarWhereInput)
    deleteMany?: Array<move_target_proseScalarWhereInput>;
}
