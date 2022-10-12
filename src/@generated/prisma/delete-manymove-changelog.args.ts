import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogWhereInput } from '../move-changelog/move-changelog-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveChangelogArgs {

    @Field(() => move_changelogWhereInput, {nullable:true})
    @Type(() => move_changelogWhereInput)
    where?: move_changelogWhereInput;
}
