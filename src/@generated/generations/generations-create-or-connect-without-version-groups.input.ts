import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutVersion_groupsInput } from './generations-create-without-version-groups.input';

@InputType()
export class generationsCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => generationsCreateWithoutVersion_groupsInput)
    create!: generationsCreateWithoutVersion_groupsInput;
}
