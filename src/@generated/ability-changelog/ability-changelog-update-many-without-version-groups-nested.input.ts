import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutVersion_groupsInput } from './ability-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutVersion_groupsInput } from './ability-changelog-create-or-connect-without-version-groups.input';
import { ability_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput } from './ability-changelog-upsert-with-where-unique-without-version-groups.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { ability_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput } from './ability-changelog-update-with-where-unique-without-version-groups.input';
import { ability_changelogUpdateManyWithWhereWithoutVersion_groupsInput } from './ability-changelog-update-many-with-where-without-version-groups.input';
import { ability_changelogScalarWhereInput } from './ability-changelog-scalar-where.input';

@InputType()
export class ability_changelogUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [ability_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogCreateWithoutVersion_groupsInput)
    create?: Array<ability_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<ability_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<ability_changelogUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    set?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    disconnect?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    delete?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<ability_changelogUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<ability_changelogUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogScalarWhereInput], {nullable:true})
    @Type(() => ability_changelogScalarWhereInput)
    deleteMany?: Array<ability_changelogScalarWhereInput>;
}
