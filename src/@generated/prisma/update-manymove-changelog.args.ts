import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogUpdateManyMutationInput } from '../move-changelog/move-changelog-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_changelogWhereInput } from '../move-changelog/move-changelog-where.input';

@ArgsType()
export class UpdateManymoveChangelogArgs {

    @Field(() => move_changelogUpdateManyMutationInput, {nullable:false})
    @Type(() => move_changelogUpdateManyMutationInput)
    data!: move_changelogUpdateManyMutationInput;

    @Field(() => move_changelogWhereInput, {nullable:true})
    @Type(() => move_changelogWhereInput)
    where?: move_changelogWhereInput;
}
