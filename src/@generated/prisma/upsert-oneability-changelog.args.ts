import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from '../ability-changelog/ability-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateInput } from '../ability-changelog/ability-changelog-create.input';
import { ability_changelogUpdateInput } from '../ability-changelog/ability-changelog-update.input';

@ArgsType()
export class UpsertOneabilityChangelogArgs {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogCreateInput, {nullable:false})
    @Type(() => ability_changelogCreateInput)
    create!: ability_changelogCreateInput;

    @Field(() => ability_changelogUpdateInput, {nullable:false})
    @Type(() => ability_changelogUpdateInput)
    update!: ability_changelogUpdateInput;
}
