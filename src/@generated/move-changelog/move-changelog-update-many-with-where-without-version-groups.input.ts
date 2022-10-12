import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogScalarWhereInput } from './move-changelog-scalar-where.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateManyMutationInput } from './move-changelog-update-many-mutation.input';

@InputType()
export class move_changelogUpdateManyWithWhereWithoutVersion_groupsInput {

    @Field(() => move_changelogScalarWhereInput, {nullable:false})
    @Type(() => move_changelogScalarWhereInput)
    where!: move_changelogScalarWhereInput;

    @Field(() => move_changelogUpdateManyMutationInput, {nullable:false})
    @Type(() => move_changelogUpdateManyMutationInput)
    data!: move_changelogUpdateManyMutationInput;
}
