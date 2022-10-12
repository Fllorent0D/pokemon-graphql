import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutVersion_groupsInput } from './versions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutVersion_groupsInput } from './versions-create-or-connect-without-version-groups.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class versionsUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [versionsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsCreateWithoutVersion_groupsInput)
    create?: Array<versionsCreateWithoutVersion_groupsInput>;

    @Field(() => [versionsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<versionsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [versionsWhereUniqueInput], {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: Array<versionsWhereUniqueInput>;
}
