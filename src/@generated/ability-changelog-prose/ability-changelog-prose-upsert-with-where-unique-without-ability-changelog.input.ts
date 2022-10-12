import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseUpdateWithoutAbility_changelogInput } from './ability-changelog-prose-update-without-ability-changelog.input';
import { ability_changelog_proseCreateWithoutAbility_changelogInput } from './ability-changelog-prose-create-without-ability-changelog.input';

@InputType()
export class ability_changelog_proseUpsertWithWhereUniqueWithoutAbility_changelogInput {

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;

    @Field(() => ability_changelog_proseUpdateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateWithoutAbility_changelogInput)
    update!: ability_changelog_proseUpdateWithoutAbility_changelogInput;

    @Field(() => ability_changelog_proseCreateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => ability_changelog_proseCreateWithoutAbility_changelogInput)
    create!: ability_changelog_proseCreateWithoutAbility_changelogInput;
}
