import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsScalarWhereInput } from './versions-scalar-where.input';
import { Type } from 'class-transformer';
import { versionsUpdateManyMutationInput } from './versions-update-many-mutation.input';

@InputType()
export class versionsUpdateManyWithWhereWithoutVersion_groupsInput {

    @Field(() => versionsScalarWhereInput, {nullable:false})
    @Type(() => versionsScalarWhereInput)
    where!: versionsScalarWhereInput;

    @Field(() => versionsUpdateManyMutationInput, {nullable:false})
    @Type(() => versionsUpdateManyMutationInput)
    data!: versionsUpdateManyMutationInput;
}
