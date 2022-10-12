import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseCreateWithoutAbility_changelogInput } from './ability-changelog-prose-create-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput } from './ability-changelog-prose-create-or-connect-without-ability-changelog.input';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';

@InputType()
export class ability_changelog_proseUncheckedCreateNestedManyWithoutAbility_changelogInput {

    @Field(() => [ability_changelog_proseCreateWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateWithoutAbility_changelogInput)
    create?: Array<ability_changelog_proseCreateWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput)
    connectOrCreate?: Array<ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    connect?: Array<ability_changelog_proseWhereUniqueInput>;
}
