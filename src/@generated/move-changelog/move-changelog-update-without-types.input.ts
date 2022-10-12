import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { move_effectsUpdateOneWithoutMove_changelogNestedInput } from '../move-effects/move-effects-update-one-without-move-changelog-nested.input';
import { version_groupsUpdateOneRequiredWithoutMove_changelogNestedInput } from '../version-groups/version-groups-update-one-required-without-move-changelog-nested.input';
import { movesUpdateOneRequiredWithoutMove_changelogNestedInput } from '../moves/moves-update-one-required-without-move-changelog-nested.input';

@InputType()
export class move_changelogUpdateWithoutTypesInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_chance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => move_effectsUpdateOneWithoutMove_changelogNestedInput, {nullable:true})
    move_effects?: move_effectsUpdateOneWithoutMove_changelogNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutMove_changelogNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutMove_changelogNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_changelogNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_changelogNestedInput;
}
