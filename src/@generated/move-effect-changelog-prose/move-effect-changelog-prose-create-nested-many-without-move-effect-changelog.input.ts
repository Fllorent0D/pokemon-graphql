import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseCreateWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-create-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-create-or-connect-without-move-effect-changelog.input';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';

@InputType()
export class move_effect_changelog_proseCreateNestedManyWithoutMove_effect_changelogInput {

    @Field(() => [move_effect_changelog_proseCreateWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateWithoutMove_effect_changelogInput)
    create?: Array<move_effect_changelog_proseCreateWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput)
    connectOrCreate?: Array<move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    connect?: Array<move_effect_changelog_proseWhereUniqueInput>;
}
