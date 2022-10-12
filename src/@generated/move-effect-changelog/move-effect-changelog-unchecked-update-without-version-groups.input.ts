import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { move_effect_changelog_proseUncheckedUpdateManyWithoutMove_effect_changelogNestedInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-unchecked-update-many-without-move-effect-changelog-nested.input';

@InputType()
export class move_effect_changelogUncheckedUpdateWithoutVersion_groupsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effect_id?: IntFieldUpdateOperationsInput;

    @Field(() => move_effect_changelog_proseUncheckedUpdateManyWithoutMove_effect_changelogNestedInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseUncheckedUpdateManyWithoutMove_effect_changelogNestedInput;
}
