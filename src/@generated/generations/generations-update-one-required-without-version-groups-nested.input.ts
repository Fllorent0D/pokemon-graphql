import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutVersion_groupsInput } from './generations-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutVersion_groupsInput } from './generations-create-or-connect-without-version-groups.input';
import { generationsUpsertWithoutVersion_groupsInput } from './generations-upsert-without-version-groups.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutVersion_groupsInput } from './generations-update-without-version-groups.input';

@InputType()
export class generationsUpdateOneRequiredWithoutVersion_groupsNestedInput {

    @Field(() => generationsCreateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsCreateWithoutVersion_groupsInput)
    create?: generationsCreateWithoutVersion_groupsInput;

    @Field(() => generationsCreateOrConnectWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: generationsCreateOrConnectWithoutVersion_groupsInput;

    @Field(() => generationsUpsertWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsUpsertWithoutVersion_groupsInput)
    upsert?: generationsUpsertWithoutVersion_groupsInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsUpdateWithoutVersion_groupsInput)
    update?: generationsUpdateWithoutVersion_groupsInput;
}
