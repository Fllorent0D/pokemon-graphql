import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutVersion_groupsInput } from './generations-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutVersion_groupsInput } from './generations-create-or-connect-without-version-groups.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutVersion_groupsInput {

    @Field(() => generationsCreateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsCreateWithoutVersion_groupsInput)
    create?: generationsCreateWithoutVersion_groupsInput;

    @Field(() => generationsCreateOrConnectWithoutVersion_groupsInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: generationsCreateOrConnectWithoutVersion_groupsInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
