import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutAbility_changelog_proseInput } from './ability-changelog-create-without-ability-changelog-prose.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput } from './ability-changelog-create-or-connect-without-ability-changelog-prose.input';
import { ability_changelogUpsertWithoutAbility_changelog_proseInput } from './ability-changelog-upsert-without-ability-changelog-prose.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { ability_changelogUpdateWithoutAbility_changelog_proseInput } from './ability-changelog-update-without-ability-changelog-prose.input';

@InputType()
export class ability_changelogUpdateOneRequiredWithoutAbility_changelog_proseNestedInput {

    @Field(() => ability_changelogCreateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogCreateWithoutAbility_changelog_proseInput)
    create?: ability_changelogCreateWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput)
    connectOrCreate?: ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogUpsertWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogUpsertWithoutAbility_changelog_proseInput)
    upsert?: ability_changelogUpsertWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogWhereUniqueInput, {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogUpdateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogUpdateWithoutAbility_changelog_proseInput)
    update?: ability_changelogUpdateWithoutAbility_changelog_proseInput;
}
