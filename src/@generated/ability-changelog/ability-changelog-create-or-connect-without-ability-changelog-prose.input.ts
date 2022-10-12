import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateWithoutAbility_changelog_proseInput } from './ability-changelog-create-without-ability-changelog-prose.input';

@InputType()
export class ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogCreateWithoutAbility_changelog_proseInput, {nullable:false})
    @Type(() => ability_changelogCreateWithoutAbility_changelog_proseInput)
    create!: ability_changelogCreateWithoutAbility_changelog_proseInput;
}
