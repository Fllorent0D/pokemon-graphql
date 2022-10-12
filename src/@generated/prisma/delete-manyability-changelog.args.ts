import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilityChangelogArgs {

    @Field(() => ability_changelogWhereInput, {nullable:true})
    @Type(() => ability_changelogWhereInput)
    where?: ability_changelogWhereInput;
}
