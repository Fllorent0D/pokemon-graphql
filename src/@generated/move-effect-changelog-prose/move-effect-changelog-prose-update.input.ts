import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput } from '../languages/languages-update-one-required-without-move-effect-changelog-prose-nested.input';
import { move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput } from '../move-effect-changelog/move-effect-changelog-update-one-required-without-move-effect-changelog-prose-nested.input';

@InputType()
export class move_effect_changelog_proseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput;

    @Field(() => move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput;
}
