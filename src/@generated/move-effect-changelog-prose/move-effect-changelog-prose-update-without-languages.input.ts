import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput } from '../move-effect-changelog/move-effect-changelog-update-one-required-without-move-effect-changelog-prose-nested.input';

@InputType()
export class move_effect_changelog_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput;
}
