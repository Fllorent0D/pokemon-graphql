import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateWithoutVersion_groupsInput } from './move-effect-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateOrConnectWithoutVersion_groupsInput } from './move-effect-changelog-create-or-connect-without-version-groups.input';
import { move_effect_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput } from './move-effect-changelog-upsert-with-where-unique-without-version-groups.input';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { move_effect_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput } from './move-effect-changelog-update-with-where-unique-without-version-groups.input';
import { move_effect_changelogUpdateManyWithWhereWithoutVersion_groupsInput } from './move-effect-changelog-update-many-with-where-without-version-groups.input';
import { move_effect_changelogScalarWhereInput } from './move-effect-changelog-scalar-where.input';

@InputType()
export class move_effect_changelogUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [move_effect_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateWithoutVersion_groupsInput)
    create?: Array<move_effect_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_effect_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<move_effect_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    set?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    disconnect?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    delete?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    connect?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<move_effect_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<move_effect_changelogUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_effect_changelogScalarWhereInput)
    deleteMany?: Array<move_effect_changelogScalarWhereInput>;
}
