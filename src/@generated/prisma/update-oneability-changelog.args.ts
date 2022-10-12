import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogUpdateInput } from '../ability-changelog/ability-changelog-update.input';
import { Type } from 'class-transformer';
import { ability_changelogWhereUniqueInput } from '../ability-changelog/ability-changelog-where-unique.input';

@ArgsType()
export class UpdateOneabilityChangelogArgs {

    @Field(() => ability_changelogUpdateInput, {nullable:false})
    @Type(() => ability_changelogUpdateInput)
    data!: ability_changelogUpdateInput;

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;
}
