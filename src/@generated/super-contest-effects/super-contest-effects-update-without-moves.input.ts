import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUpdateWithoutMovesInput {

    @Field(() => super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput;
}
