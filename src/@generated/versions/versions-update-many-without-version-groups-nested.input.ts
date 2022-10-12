import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutVersion_groupsInput } from './versions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutVersion_groupsInput } from './versions-create-or-connect-without-version-groups.input';
import { versionsUpsertWithWhereUniqueWithoutVersion_groupsInput } from './versions-upsert-with-where-unique-without-version-groups.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithWhereUniqueWithoutVersion_groupsInput } from './versions-update-with-where-unique-without-version-groups.input';
import { versionsUpdateManyWithWhereWithoutVersion_groupsInput } from './versions-update-many-with-where-without-version-groups.input';
import { versionsScalarWhereInput } from './versions-scalar-where.input';

@InputType()
export class versionsUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [versionsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsCreateWithoutVersion_groupsInput)
    create?: Array<versionsCreateWithoutVersion_groupsInput>;

    @Field(() => [versionsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<versionsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [versionsUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<versionsUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [versionsWhereUniqueInput], {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    set?: Array<versionsWhereUniqueInput>;

    @Field(() => [versionsWhereUniqueInput], {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    disconnect?: Array<versionsWhereUniqueInput>;

    @Field(() => [versionsWhereUniqueInput], {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    delete?: Array<versionsWhereUniqueInput>;

    @Field(() => [versionsWhereUniqueInput], {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: Array<versionsWhereUniqueInput>;

    @Field(() => [versionsUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<versionsUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [versionsUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<versionsUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [versionsScalarWhereInput], {nullable:true})
    @Type(() => versionsScalarWhereInput)
    deleteMany?: Array<versionsScalarWhereInput>;
}
