import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from '../ability-changelog/ability-changelog-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneabilityChangelogArgs {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;
}
