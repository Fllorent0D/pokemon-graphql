import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutVersion_groupsInput } from './move-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutVersion_groupsInput } from './move-changelog-create-or-connect-without-version-groups.input';
import { move_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput } from './move-changelog-upsert-with-where-unique-without-version-groups.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { move_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput } from './move-changelog-update-with-where-unique-without-version-groups.input';
import { move_changelogUpdateManyWithWhereWithoutVersion_groupsInput } from './move-changelog-update-many-with-where-without-version-groups.input';
import { move_changelogScalarWhereInput } from './move-changelog-scalar-where.input';

@InputType()
export class move_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [move_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutVersion_groupsInput)
    create?: Array<move_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<move_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    set?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    disconnect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    delete?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<move_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_changelogUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<move_changelogUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_changelogScalarWhereInput)
    deleteMany?: Array<move_changelogScalarWhereInput>;
}
