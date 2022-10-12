import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutVersion_groupsInput } from './generations-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutVersion_groupsInput } from './generations-create-without-version-groups.input';

@InputType()
export class generationsUpsertWithoutVersion_groupsInput {

    @Field(() => generationsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => generationsUpdateWithoutVersion_groupsInput)
    update!: generationsUpdateWithoutVersion_groupsInput;

    @Field(() => generationsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => generationsCreateWithoutVersion_groupsInput)
    create!: generationsCreateWithoutVersion_groupsInput;
}
