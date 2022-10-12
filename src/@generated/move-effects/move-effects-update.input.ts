import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogUpdateManyWithoutMove_effectsNestedInput } from '../move-changelog/move-changelog-update-many-without-move-effects-nested.input';
import { move_effect_changelogUpdateManyWithoutMove_effectsNestedInput } from '../move-effect-changelog/move-effect-changelog-update-many-without-move-effects-nested.input';
import { move_effect_proseUpdateManyWithoutMove_effectsNestedInput } from '../move-effect-prose/move-effect-prose-update-many-without-move-effects-nested.input';
import { movesUpdateManyWithoutMove_effectsNestedInput } from '../moves/moves-update-many-without-move-effects-nested.input';

@InputType()
export class move_effectsUpdateInput {

    @Field(() => move_changelogUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_changelog?: move_changelogUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => move_effect_changelogUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => move_effect_proseUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    move_effect_prose?: move_effect_proseUpdateManyWithoutMove_effectsNestedInput;

    @Field(() => movesUpdateManyWithoutMove_effectsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutMove_effectsNestedInput;
}
