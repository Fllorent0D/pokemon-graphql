import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseCreateWithoutAbility_changelogInput } from './ability-changelog-prose-create-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput } from './ability-changelog-prose-create-or-connect-without-ability-changelog.input';
import { ability_changelog_proseUpsertWithWhereUniqueWithoutAbility_changelogInput } from './ability-changelog-prose-upsert-with-where-unique-without-ability-changelog.input';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';
import { ability_changelog_proseUpdateWithWhereUniqueWithoutAbility_changelogInput } from './ability-changelog-prose-update-with-where-unique-without-ability-changelog.input';
import { ability_changelog_proseUpdateManyWithWhereWithoutAbility_changelogInput } from './ability-changelog-prose-update-many-with-where-without-ability-changelog.input';
import { ability_changelog_proseScalarWhereInput } from './ability-changelog-prose-scalar-where.input';

@InputType()
export class ability_changelog_proseUpdateManyWithoutAbility_changelogNestedInput {

    @Field(() => [ability_changelog_proseCreateWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateWithoutAbility_changelogInput)
    create?: Array<ability_changelog_proseCreateWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput)
    connectOrCreate?: Array<ability_changelog_proseCreateOrConnectWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseUpsertWithWhereUniqueWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseUpsertWithWhereUniqueWithoutAbility_changelogInput)
    upsert?: Array<ability_changelog_proseUpsertWithWhereUniqueWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    set?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    disconnect?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    delete?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    connect?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseUpdateWithWhereUniqueWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseUpdateWithWhereUniqueWithoutAbility_changelogInput)
    update?: Array<ability_changelog_proseUpdateWithWhereUniqueWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseUpdateManyWithWhereWithoutAbility_changelogInput], {nullable:true})
    @Type(() => ability_changelog_proseUpdateManyWithWhereWithoutAbility_changelogInput)
    updateMany?: Array<ability_changelog_proseUpdateManyWithWhereWithoutAbility_changelogInput>;

    @Field(() => [ability_changelog_proseScalarWhereInput], {nullable:true})
    @Type(() => ability_changelog_proseScalarWhereInput)
    deleteMany?: Array<ability_changelog_proseScalarWhereInput>;
}
