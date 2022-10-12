import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogCreateInput } from '../move-changelog/move-changelog-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveChangelogArgs {

    @Field(() => move_changelogCreateInput, {nullable:false})
    @Type(() => move_changelogCreateInput)
    data!: move_changelogCreateInput;
}
