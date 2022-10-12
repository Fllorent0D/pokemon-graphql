import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseCreateNestedManyWithoutMove_battle_stylesInput } from '../move-battle-style-prose/move-battle-style-prose-create-nested-many-without-move-battle-styles.input';

@InputType()
export class move_battle_stylesCreateWithoutNature_battle_style_preferencesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_battle_style_proseCreateNestedManyWithoutMove_battle_stylesInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseCreateNestedManyWithoutMove_battle_stylesInput;
}
