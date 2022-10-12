import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_effect_changelog_proseUncheckedCreateNestedManyWithoutMove_effect_changelogInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-unchecked-create-nested-many-without-move-effect-changelog.input';

@InputType()
export class move_effect_changelogUncheckedCreateWithoutVersion_groupsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => move_effect_changelog_proseUncheckedCreateNestedManyWithoutMove_effect_changelogInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseUncheckedCreateNestedManyWithoutMove_effect_changelogInput;
}
